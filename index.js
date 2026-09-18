require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes.js");
const productRouter = require("./routes/productroutes.js");

const app = express();

const port = process.env.PORT || 5555;

const atlasString = process.env.MONGO_URI;

mongoose.connect(atlasString)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("Connection Error:", err));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is active");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.listen(5555, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:5555");
});
