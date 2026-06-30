const express = require("express");
const app = express();

app.get("/display", (req, res) => {
    res.send("Welcome to Express.js");
});

app.get("/about", (req, res) => {
    res.send({
        name: "pravin",
        course: "node.js"
    });
});

app.get("/contact", (req, res) => {
    res.send({
        contact: "97473029289823"
    });
});

app.get("/student/:id", (req, res) => {
    res.send({
        id: req.params.id
    });
});

app.get("/search", (req, res) => {
    res.send(req.query);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});