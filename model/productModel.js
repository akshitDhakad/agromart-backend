const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productSellerName: {
    type: String,
    required: true,
  },
  productVerified: {
    type: Boolean,
    required: true,
  },
  productUploadDate: {
    type: String,
    required: true,
  },
  productName: {
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
