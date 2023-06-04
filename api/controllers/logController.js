const Log = require("../models/Log")
const mongoose = require("mongoose")
const Food = require("../models/Food")

const getLogs = async (req, res) => {
    const user_id = req.user._id;
    const logs = await Log.getLogs(user_id)

    const allLogs = await Log.find({ user_id });
    const total = await Log.countDocuments({ user_id });

    const response = {
        error: false,
        total,
        allLogs
    }

    return res.status(200).json(response);
}
const addFood = async (req, res) => {

    // try {
    //     const user_id = req.user._id;
    //     const { _id } = req.body;
    //     const logs = await Log.addFood(user_id, _id);
    
    //     return res.status(200).json(logs)
    // } catch (err) {
    //     return res.status(500).json({ error: err.message })
    // }
    const { foodId } = req.body;

    if (!foodId) {
        return res.status(400).json({ error: "please enter valid food" });
    }

    try {
        const user_id = req.user._id;
        const food = await Food.findById(foodId);
        if (!food) {
            return res.status(404).json({ error: "No food found" });
        }
        const log = await Log.create({ user_id, food });
        res.status(200).json(log);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteFoodLog = async (req, res) => {
    const user_id = req.user._id;
    const { _id } = req.params;
    const food = await Log.findOneAndDelete( user_id, _id )

    if (!mongoose.Types.ObjectId.isValid(id) || !food) {
        return res.status(400).json({ error: "No such food" })
    }

    res.status(200).json(food)
}

module.exports = {
    getLogs,
    addFood,
    deleteFoodLog
}