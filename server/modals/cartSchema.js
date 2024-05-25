//import mongoose for schema ;
const mongoose = require("mongoose");

//import schema
const Schema = mongoose.Schema;

 
// define the Schema (the structure of the article)
const cartSchema = new Schema({
    userEmail: String,
    cardName: String,
    cardQuantityAndPrice: String,
    venueName: String,
    venuePrice: String,
    venueDate: String,
    venueTime: String,
    userLocation: String,
    userPhone: String,
  });


// Create a model based on that schema(and the name in database)
const Cart =mongoose.model("Cart",cartSchema)


// export the model
module.exports = Cart;