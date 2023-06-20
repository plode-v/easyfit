const jwt = require("jsonwebtoken")
const User = require("../models/User")
require("dotenv").config();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: "1d" });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id);

        return res.status(200).json({ email, token, username: user.username })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const user = await User.register(email, password, username)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, username, token })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    login,
    register
}