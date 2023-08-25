const express = require("express");
const app = express();
const dotenv = require("dotenv");

// configraration with env.
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello from port 3000.");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Connected");
})