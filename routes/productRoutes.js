const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
// router.post("/addproduct", productController.addProduct);

module.exports = router;
