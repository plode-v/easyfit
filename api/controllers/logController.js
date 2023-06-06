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
    const { id } = req.params;

    try {
        const log = await Log.deleteFoodLog({ _id: id });

        res.status(200).json(log);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    getLogs,
    addFood,
    deleteFoodLog
}