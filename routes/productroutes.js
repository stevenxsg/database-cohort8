const express = require("express");
const upload = require("../config/multer.js");

const productRouter = express.Router();

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/productcontroller.js");

// CREATE PRODUCT
productRouter.post("/", upload.single("image"), createProduct);

// GET ALL PRODUCTS
productRouter.get("/all-products", getAllProducts);

// GET SINGLE PRODUCT
productRouter.get("/get-one-product/:id", getSingleProduct);

// DELETE PRODUCT
productRouter.delete("/delete-product/:id", deleteProduct);

// UPDATE PRODUCT
productRouter.patch("/update-product/:id", upload.single("image"), updateProduct);

module.exports = productRouter;