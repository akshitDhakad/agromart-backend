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

// exports.addProduct = async (req, res) => {
//   try {
//     const { name, type, price, imageUrl, description, category, discount } =
//       req.body;

//     // Convert data to lowercase
//     const lowercaseName = name.toLowerCase();
//     const lowercaseType = type.toLowerCase();
//     const lowercaseDescription = description.toLowerCase();
//     const lowercaseCategory = category.toLowerCase();

//     const product = new Product({
//       name: lowercaseName,
//       type: lowercaseType,
//       price,
//       imageUrl,
//       description: lowercaseDescription,
//       category: lowercaseCategory,
//       discount,
//       rating,
//     });

//     await product.save();
//     res.status(201).json({ success: true });
//   } catch (error) {
//     console.error("Error adding product:", error.message);
//     res.status(500).json({ error: "An error occurred" });
//   }
// };
