const Food = require("../models/Food")
const mongoose = require("mongoose")

// get all foods
const getFoods = async (req, res) => {
    
    try {
        const search = req.query.search || "";
        
        const foods = await Food.find({name: {$regex:search, $options: "i"}})
        const total = await Food.countDocuments({name: {$regex: search, $options: "i"}});

        const response = {
            error: false,
            total,
            foods
        }

        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const getFood = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await Food.findOne({_id: id});
    
        if (!food) {
            return res.status(404).json({ error: "No such food" });
        }

        res.status(200).json(food);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
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