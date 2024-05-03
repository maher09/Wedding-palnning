const express = require('express')
const cors  = require('cors')

//CardColored SCHEMA SET
const CardColored = require("./modals/cardColoredSchema");
const app = express()
app.use(cors())
const port = 3000
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



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
                console.log(req.body);
                console.log('saved')
                res.status(200).send('Data saved successfully'); // Send a response

              
            })
            .catch(() => {
                    console.log('not saved')
                    res.status(500).send('Error saving data'); // Send a response in case of error

                })
        
    })
  