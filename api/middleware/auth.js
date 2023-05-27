const jwt = require("jsonwebtoken")
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(400).json({ message: "You are unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}

module.exports = auth;