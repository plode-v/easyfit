const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    carb: Number,
    protein: Number,
    fat: Number,
});

module.exports = mongoose.model("Food", foodSchema);
