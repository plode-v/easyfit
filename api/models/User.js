const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minLength: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: "Profile"
    }
})

module.exports = User = mongoose.model("User", userSchema);

