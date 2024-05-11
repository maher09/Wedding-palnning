//import mongoose for schema ;
const mongoose = require("mongoose");

//import schema
const Schema = mongoose.Schema;

 
// define the Schema (the structure of the article)
const cardColoredSchema = new Schema({
    theBride: String,
    theGroom: String,
    date: String,
    time: String,
    location: String,
    notes: String,
    designColor: String,
  });


// Create a model based on that schema(and the name in database)
const CardColored =mongoose.model("CardColored",cardColoredSchema)


// export the model
module.exports = CardColored;