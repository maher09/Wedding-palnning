
const express = require('express')

//call cors
const cors = require('cors')

//CardColored SCHEMA SET
const CardColored = require("./modals/cardColoredSchema");
//CardNoColored SCHEMA SET
const CardNoColored = require("./modals/cardNoColoredSchema");
//Signup SCHEMA SET
const Signup = require("./modals/signupSchema");
//Cart SCHEMA SET
const Cart = require("./modals/cartSchema");
//call bcrypt for hashing passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;


//Import express-session
const session = require('express-session');




//CALL dotenv
require('dotenv').config();

//cal JWT
const jwt = require('jsonwebtoken');



const app = express()

app.use(cors())

const port = 3000

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false, // add this line,
    cookie: { secure: false }}
        ));
//verifyToken function
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(403).send('A token is required for authentication');
    }
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
}

//connect to database server
mongoose
    .connect(
        "mongodb+srv://zaid:ErsdfBuw77mgwUCD@cluster0.iy2nasf.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {

        app.listen(port, () => {

            console.log("http://localhost:3000/");

        })
    })
    .catch((error) => { console.log("not connected") 
                console.log(error);
    });
    

//form post send data for CardColored



//cardCompColored form post
app.post("/cardCompColored",verifyToken, (req, res) => {

    const cardColored = new CardColored({
        userEmail: req.body.userEmail,
        theBride: req.body.theBride,
        theGroom: req.body.theGroom,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        notes: req.body.notes,
        designColor: req.body.designColor,
    });
    cardColored
        .save()

        .then(() => {
            res.status(200).send('Data saved successfully'); // Send a response


        })
        .catch(() => {

            res.status(500).send('Error saving data'); // Send a response in case of error

        })

})

//cardNoColored form post    
app.post("/cardCompNoColored",  verifyToken, (req, res) => {

    const cardNoColored = new CardNoColored({
        userEmail: req.body.userEmail,
        theBride: req.body.theBride,
        theGroom: req.body.theGroom,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        notes: req.body.notes,

    });

    cardNoColored
        .save()

        .then(() => {
            res.status(200).send('Data saved successfully'); // Send a response


        })
        .catch(() => {

            res.status(500).send('Error saving data'); // Send a response in case of error

        })

})



//signup  form post 
app.post("/signup", (req, res) => {
    const { Email, Password } = req.body;

    // Hash the password
    bcrypt.hash(Password, saltRounds, function(err, hash) {
        if (err) {
            res.status(500).send('Error hashing password');
            return;
        }

        // Check if the email already exists
        Signup.findOne({ Email })
            .then((existingUser) => {
                if (existingUser) {
                    // The email is already used, return an error
                    res.status(400).send('Email already used');
                } else {
                    // The email is not used, create a new user
                    const signup = new Signup({
                        TheGroom: req.body.TheGroom,
                        TheBride: req.body.TheBride,
                        Email: req.body.Email,
                        Password: hash,
                    });

                    signup
                        .save()
                        .then(() => {
                            res.status(200).send('Data saved successfully');
                        })
                        .catch(() => {
                            res.status(500).send('Error saving data');
                        });
                }
            })
                        .catch(() => {
                                res.status(500).send('Error checking email');
            });
    });
});

//cart form post 
/////////////////
app.post("/cart",verifyToken, (req, res) => {

    const cart = new Cart({
        userEmail: req.body.userEmail,
        cardName: req.body.cardName,
        cardQuantityAndPrice: req.body.cardQuantityAndPrice,
        venueName: req.body.venueName,
        venuePrice: req.body.venuePrice,
        venueDate: req.body.venueDate,
        venueTime: req.body.venueTime,
        userLocation: req.body.userLocation,
        userPhone: req.body.userPhone,
        
    });
    cart
        .save()

        .then(() => {
            res.status(200).send('Data saved successfully'); // Send a response


        })
        .catch(() => {

            res.status(500).send('Error saving data'); // Send a response in case of error

        })

})


/////////////////


//login authentication 


//first lets check if user exist in database
app.post("/login", (req, res) => {
    console.log(req.sessionID);
    const { Email, Password } = req.body;

    // Find the user by email
    Signup.findOne({ Email })
        .then((user) => {
            if (!user) {
                // If user not found, send an error response
                return res.status(404).send('Incorrect email or password');
            }

            // Compare the provided password with the hashed password stored in the database
            bcrypt.compare(Password, user.Password, function(err, result) {
                if (err || !result) {
                    // If passwords don't match, send an error response
                    return res.status(401).send('Incorrect email or password');
                }

                // Generate JWT token
                const token = jwt.sign({ userId: user._id ,
                                        TheGroom:user.TheGroom,
                                        TheBride:user.TheBride,
                                        Email:user.Email
                                        },process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN });

                // Passwords,emails and token generated  match , authentication successful
                // Store user data in session
                req.session.user = {
                    id: user._id,
                    email: user.Email,
                    theGroom: user.TheGroom,
                    theBride: user.TheBride,
                    token: token
                };

                // Set authenticated flag in session
                req.session.authenticated = true;

                res.status(200).send({ message: 'Login successful',data:user.id, token });
            });
        })
        .catch(() => {
            // Error occurred while finding user
            res.status(500).send('Incorrect email or password');
        });
});



// Check for reservation route
app.post("/checkReservation", verifyToken, async (req, res) => {
    try {
        const { venueDate, venueTime,venueName } = req.body;
        const reservation = await Cart.findOne({ venueDate, venueTime,venueName });
        if (reservation) {
            return res.status(200).json({ reserved: true, message: 'This Date and Time is already reserved' });
        } else {
            return res.status(200).json({ reserved: false, message: 'This Date and Time is available.' });
        }
    } catch (error) {
        return res.status(500).json({ reserved: false, message: 'Error checking reservation status.' });
    }
});