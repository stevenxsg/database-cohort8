require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes.js");
const productRouter = require("./routes/productroutes.js");

const app = express();

const port = process.env.PORT || 5555;
const atlasString = process.env.MONGO_URI;

// Check if MONGO_URI is set before attempting to connect
if (!atlasString) {
    console.error("CRITICAL ERROR: MONGO_URI is not defined in environment variables!");
} else {
    mongoose.connect(atlasString)
        .then(() => console.log("MongoDB Connected Successfully"))
        .catch((err) => console.error("MongoDB Connection Error:", err.message));
}

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is active");
});

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});