const express = require("express");

const userRouter = express.Router();

const {
    createUser,
    getUsers ,deleteUser ,getAllUsers ,getSingleUser,
updateUser
} = require("../controllers/usercontroller.js");

userRouter.post("/", createUser);
userRouter.get("/all-users" ,getAllUsers)
userRouter.get("/get-one-user/:id" ,getSingleUser)

userRouter.delete("/delete-user/:id", deleteUser);
userRouter.patch("/update-user/:id" , updateUser)

module.exports = userRouter;