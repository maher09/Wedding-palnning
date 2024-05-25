//import mongoose for schema ;
const mongoose = require("mongoose");
//import schema
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const cardNoColoredSchema = new Schema({
    userEmail: String,
    theBride: String,
    theGroom: String,
    date: String,
    time: String,
    location: String,
    notes: String,
    
  });


  // Create a model based on that schema(and the name in database)
const CardNoColored =mongoose.model("CardNoColored",cardNoColoredSchema)

// export the model
module.exports = CardNoColored;