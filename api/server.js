require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./auth/authModel.js");
const connect = require("./configs/dbConfig.js")

const app = express();
app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        return res.status(200).json("Success");
    } catch (err) {
        console.error(err);
        return res.status(401).json("Failed")
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!user || !passwordMatch) {
            return res.status(401).json("Invalid username or password.");
        }

        const accessToken = generateAccessToken({ id: user._id });
        const refreshToken = generateRefreshToken({ id: user._id });

        return res.status(200).json({ accessToken, refreshToken });
    } catch (err) {
        return res.status(500).json("An error occurred");
    }
});

app.post("/logout", verifyToken, (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return res.status(400).send("Unable to logout")
            }
            return res.status(200).json("Logout successful")
        });
    }
    return res.status(200).end("Logged out success");
})

// Change this to user's dashboard
app.get("/dashboard", verifyToken, (req, res) => {
    const user = req.user;

    console.log("this is protected route");
    res.json({ message: "This is a protected route", user })
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json("Access token not provided");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json("Invalid access token");
        }

        req.user = user;
        next();
    })
}


app.listen(3000, () => console.log("Server has started on port 3000"));