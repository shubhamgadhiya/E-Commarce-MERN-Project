const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description:String,
  price: String,
  category:String,
  image:String
},
{
  timestamps: true,
}
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;