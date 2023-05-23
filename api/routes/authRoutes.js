const express = require("express")
const passport = require("passport")
const bcrypt = require("bcrypt")
const User = require("../models/User")

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();

        res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal service error" });
    }
})

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.json({ message: "Login successful" });
});

router.get("/user/:userId", (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ message: "You are authorized to acccess this route" });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
});

module.exports = router;