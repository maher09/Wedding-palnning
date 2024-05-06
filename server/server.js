
const express = require('express')

//call cors
const cors = require('cors')

//CardColored SCHEMA SET
const CardColored = require("./modals/cardColoredSchema");
//CardNoColored SCHEMA SET
const CardNoColored = require("./modals/cardNoColoredSchema");
//Signup SCHEMA SET
const Signup = require("./modals/signupSchema");

//call bcrypt for hashing passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;



const app = express()
app.use(cors())
const port = 3000
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//connect to database server
mongoose
    .connect(
        "mongodb+srv://zaid:ErsdfBuw77mgwUCD@cluster0.iy2nasf.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
    )

    .then(() => {

        app.listen(port, () => {

            console.log("http://localhost:3000/");

        })
    })
    .catch(() => { console.log("not connected") });

//form post send data for CardColored



//cardCompColored form post
app.post("/cardCompColored", (req, res) => {

    const cardColored = new CardColored({
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
app.post("/cardCompNoColored", (req, res) => {

    const cardNoColored = new CardNoColored({

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
                        FirstName: req.body.FirstName,
                        LastName: req.body.LastName,
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