const Product = require("../model/productModel")

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error getting products:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (!product) {
      return res
        .status(401)
        .json({ success: false, error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error getting product:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const {
      productSellerName,
      productVerified,
      productUploadDate,
      productName,
      productModel,
      productPrice,
      productQuantity,
      imageUrl,
      productCity,
      productDistrict,
      productContactNumber,
      productAreaCode,
    } = req.body;

    const product = new Product({
      productSellerName: productSellerName,
      productVerified: productVerified,
      productUploadDate: productUploadDate,
      productName: productName,
      descrproductModeliption: productModel,
      productPrice: productPrice,
      productQuantity: productQuantity,
      imageUrl: imageUrl,
      productCity: productCity,
      productDistrict: productDistrict,
      productContactNumber: productContactNumber,
      productAreaCode: productAreaCode,
    });

    await product.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};
