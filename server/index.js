const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err));
})

app.get("/getUser/:id", (req, res) => {
    let id = req.params.id;
    User.find({_id: id})
    .then(user => res.json(user))
    .catch(err => console.log(err))
});

app.post("/updateUser/:id", async (req, res) => {
    let { name, email, age } = req.body;
    let { id } = req.params;

    await User.findByIdAndUpdate({_id: id}, {name, email, age})
    .then(user => res.json(user))
    .catch(err => console.log(err));
})

app.delete("/deleteUser/:id", async (req, res) => {
    let { id } = req.params;
    await User.findByIdAndDelete({_id: id})
    .then(user => res.json(user))
    .catch(err => console.log(err));
})

app.post("/create", (req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

app.listen(3001, () => {
    console.log("Your app is running on the port http://localhost:3001");
})