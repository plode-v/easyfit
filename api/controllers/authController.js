require("dotenv").config();
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const User = require("../models/User")
const Profile = require("../models/Profile")

const register = async (req, res) => {
    const { username, email } = req.body;
    const password = await bcrypt.hash(req.body.password, 10);

    try {
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({
            username,
            email,
            password
        })
        await user.save();

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(payload, process.env.SECRET, {expiresIn: "12 hours"}, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Email or password is incorrect" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Email or password is incorrect" });
        }

        const payload = {
            user: {
                id: user._id
            }
        }

        jwt.sign(payload, process.env.SECRET, {expiresIn: "12 hours"}, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

const updateProfile = async (req, res) => {
    let user = await User.findById(req.user.id);
    const { weight, height, age, gender } = req.body;

    try {
        if (user.profile) {
            const profile = await Profile.findById(user.profile);
            profile.weight = weight;
            profile.height = height;
            profile.age = age;
            profile.gender = gender;
            profile.save();
        } else {
            const newProfile = new Profile({
                weight,
                height,
                age,
                gender
            })
            user.profile = newProfile.id;
            await user.save();
        }
        res.status(200).json({ message: "Profile updated" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    register,
    login,
    updateProfile
}