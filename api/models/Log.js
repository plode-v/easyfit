const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    foodIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true
        },
    ],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Log", logSchema);