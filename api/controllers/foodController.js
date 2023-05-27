const Food = require("../models/Food")
const mongoose = require("mongoose")

// get all foods
const getFoods = async (req, res) => {
    // const foods = await Food.find({}).sort({createdAt: -1})

    // res.status(200).json(foods)
    try {
        const search = req.query.search || ""
        const foods = await Food.find({ name: { $regex: search, $options: "i" } })
        const total = await Food.countDocuments({
            name: {$regex: search, $options: "i"}
        });

        const response = {
            error: false,
            total,
            foods
        }

        res.status(200).json(response);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}

// get a single food
// const getFood = async (req, res) => {
//     const { name } = req.query;

//     try {
//         const food = await Food.findOne({name})

//         if (!food){
//             return res.status(404).json({ error: "No such food" })
//         }

//         res.status(200).json(food);
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }

// create food 
const createFood = async (req, res) => {
    try {
        const { name, calories, macros, servingSize } = req.body;
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