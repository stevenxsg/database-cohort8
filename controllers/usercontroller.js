const User = require("../model/usermodel.js");

// CREATE USER
const createUser = async (req, res) => {
    try {
        const { name, email, password} = 
        await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            user: { name, email, password }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const getAll = await User.find();

        res.status(200).json(getAll);
    } catch (error) {
        res.status(500).json({
            message: "Error getting users",
            error: error.message
        });
    }
};

// GET SINGLE USER
const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingle = await User.findById(id);

        res.status(200).json(getSingle);
    } catch (error) {
        res.status(500).json({
            message: "Error getting user",
            error: error.message
        });
    }
};

// DELETE USER
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);

        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error: error.message
        });
    }
};

// UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const update = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });

        res.status(200).json({
            message: "User updated successfully",
            user: update
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating user",
            error: error.message
        });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser
};