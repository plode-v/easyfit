const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
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
    }
},
{ timestamps: true });

module.exports = User = mongoose.model("User", authSchema);

