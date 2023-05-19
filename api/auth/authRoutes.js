const express = require("express");
const bcrypt = require('bcrypt');
const User = require("./authModel");
const jwt = requrie("jsonwebtoken");

const app = express.Router();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, email } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const existingUser = await User.findOne({ username });

    if (existingUser) res.status(401).send("User already existed");
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        newUser.save()
            res.status(200).send("Signup successfully");
    } catch (err) {
        res.status(500).send("An error occurred");
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!user || !passwordMatch) {
            return res.status(401).send("Invalid username or password");
        }
        const accessToken = generateAccessToken({ id: user._id});
    } catch (err) {

    }
})