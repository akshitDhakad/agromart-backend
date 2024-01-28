const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  proudctSellerName: {
    type: String,
    required: true,
  },
  proudctName: {
    type: String,
    required: true,
  },
  productModel: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: Array,
    required: true,
  },
  productAddress: {
    type: String,
    required: true,
  },
  productContactNumber: {
    type: Number,
    required: true,
  },
  productAreaCode: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
