const express = require("express");

const userRouter = express.Router();

const {
    createUser,
    getUsers,
    deleteUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    loginUser
} = require("../controllers/usercontroller.js");

userRouter.post("/", createUser);
userRouter.get("/all-users", getAllUsers);
userRouter.get("/get-one-user/:id", getSingleUser);

userRouter.delete("/delete-user/:id", deleteUser);
userRouter.patch("/update-user/:id", updateUser);

userRouter.post("/login", loginUser);

module.exports = userRouter;