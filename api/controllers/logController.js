const Log = require("../models/Log")
const mongoose = require("mongoose")
const Food = require("../models/Food")

const getLogs = async (req, res) => {
    const user_id = req.user._id;
    const logs = await Log.searchLogs(user_id)

    return res.status(200).json(logs);
}

const addFood = async (req, res) => {
    const { foodId } = req.body;
    const user_id = req.user._id;

    if (!foodId) {
        return res.status(400).json({ error: "please enter valid food" });
    }
    const logs = await Log.addFood(user_id, foodId);
    return res.status(200).json(logs)
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