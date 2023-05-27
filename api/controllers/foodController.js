const Food = require("../models/Food")
const User = require("../models/User")
const mongoose = require("mongoose")

// get all foods
const getFoods = async (req, res) => {
    const foods = await Food.find({})
    res.status(200).json(foods)
}

// create food 
const createFood = async (req, res) => {
    const { name, calories, macros } = req.body;
    let user = req.user.id;

    try {
        user = await User.findById(user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const newFood = new Food({
            name,
            calories,
            macros,
            servingSize
        });
        await newFood.save();
        
        res.status(200).json({ message: "Food created successfully"})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// delete food
const deleteFood = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such food" })
    }

    const food = await Food.findOneAndDelete({ _id: id })

    if (!food) {
        return res.status(400).json({ error: "No such food" })
    }

    res.status(200).json(food)
}

// update food
const updateFood = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such food" })
    }

    const food = await Food.findOneAndUpdate({ _id: id })

    if (!food) {
        return res.status(400).json({ error: "No such food" })
    }

    res.status(200).json(food)
}

module.exports = {
    getFoods,
    // getFood,
    createFood,
    deleteFood,
    updateFood
}