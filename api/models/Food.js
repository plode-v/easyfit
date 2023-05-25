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
    macros: {
        fat: {
            type: Number,
            required: true
        },
        carb: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },
    },
    servingSize : {
        type: Number,
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model("Food", foodSchema);
