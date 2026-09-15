const express = require("express");

const productRouter = express.Router();

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/productcontroller.js");


// CREATE PRODUCT
productRouter.post("/", createProduct);


// GET ALL PRODUCTS
productRouter.get("/all-products", getAllProducts);


// GET SINGLE PRODUCT
productRouter.get("/get-one-product/:id", getSingleProduct);


// DELETE PRODUCT
productRouter.delete("/delete-product/:id", deleteProduct);


// UPDATE PRODUCT
productRouter.patch("/update-product/:id", updateProduct);


module.exports = productRouter;