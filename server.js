const express = require("express");
const app = express();
const dotenv = require("dotenv");

// configraration with env.
dotenv.config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Hello from port ${port}.`);
})

app.listen(port, () => {
    console.log("Connected");
})