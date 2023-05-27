const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    consumptions: [
        {
            food: {
                type: mongoose.Schema.ObjectId,
                ref: "Food",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model("Log", logSchema);