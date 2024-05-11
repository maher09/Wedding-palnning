//import mongoose for schema ;
const mongoose = require("mongoose");
//import schema
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const signupSchema = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    });


      // Create a model based on that schema(and the name in database)
const Signup =mongoose.model("Signup",signupSchema)

// export the model
module.exports = Signup;