const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    height: {
        type: Number,
        required: true,
        min: 1
    },
    weight: {
        type: Number,
        min: 1,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
});

module.exports = mongoose.model("Profile", profileSchema);