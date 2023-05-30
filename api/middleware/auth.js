const jwt = require('jsonwebtoken')
const User = require("../models/User")
require("dotenv").config();

const auth = async (req, res, next) => {
    // verify
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select("_id");
        next();

    } catch (err) {
        res.status(401).json({ error: "Request is not authorized" })
    }
}

module.exports = auth;