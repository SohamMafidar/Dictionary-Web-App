require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const authRoute = require("./Routes/routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", authRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected successfully");
    })
    .catch((err) => {
        console.log(`DB Connection error ${err}`);
    });

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
