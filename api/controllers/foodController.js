const Food = require("../models/Food")
const mongoose = require("mongoose")

// get all foods
const getFoods = async (req, res) => {
    const user_id = req.user._id;
    const foods = await Food.find({user_id}).sort({ createdAt: -1 });

    res.status(200).json(foods)
}

const getFood = async (req, res) => {
    const { id } = req.params;
    const food = await Food.findById(id);

    if (!mongoose.Types.ObjectId.isValid(id) || !food) {
        return res.status(404).json({ error: "No such food" });
    }

    res.status(200).json(food);
}

// create food 
const createFood = async (req, res) => {
    const { name, calories, carb, protein, fat } = req.body;

    let emptyFields = []

    if (!name) {
        emptyFields.push("name")
    }
    if (!calories) {
        emptyFields.push("calories")
    }
    if (emptyFields.length > 3) {
        return res.status(400).json({ error: "Please fill in required fields" }, emptyFields);
    }

    // add doc to db
    try {
        const user_id = req.user._id;
        const food = await Food.create({ name, calories, carb, fat, protein, user_id });
        res.status(200).json(food);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// delete food
const deleteFood = async (req, res) => {
    const { id } = req.params;
    const food = await Food.findOneAndDelete({ _id: id })

    if (!mongoose.Types.ObjectId.isValid(id) || !food) {
        return res.status(400).json({ error: "No such food" })
    }

    res.status(200).json(food)
}

// update food
const updateFood = async (req, res) => {
    const { id } = req.params;
    const food = await Food.findOneAndUpdate({ _id: id })

    if (!mongoose.Types.ObjectId.isValid(id) || !food) {
        return res.status(400).json({ error: "No such food" })
    }

    res.status(200).json(food)
}

module.exports = {
    getFoods,
    getFood,
    createFood,
    deleteFood,
    updateFood
}