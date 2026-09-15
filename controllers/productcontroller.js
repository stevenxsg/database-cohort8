const productModel = require("../model/productmodel.js");

// CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);

        res.status(201).json({
            message: "Product created successfully",
            product: product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
};


// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({
            message: "Error getting products",
            error: error.message
        });
    }
};


// GET SINGLE PRODUCT
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findById(id);

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: "Error getting product",
            error: error.message
        });
    }
};


// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting product",
            error: error.message
        });
    }
};


// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Product updated successfully",
            product: product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
};