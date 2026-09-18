const User = require("../model/usermodel.js");
const bcrypt = require("bcrypt");

// CREATE USER
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const generatedSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, generatedSalt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error logging in",
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
    loginUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser
};