const Log = require("../models/Log")
const mongoose = require("mongoose")

const getLogs = async (req, res) => {
    const user_id = req.user._id;
    const logs = await Log.searchLogs(user_id)

    return res.status(200).json(logs);
}

const addFood = async (req, res) => {
    const { foodId, amount } = req.body;
    const user_id = req.user._id;

    if (!foodId) {
        return res.status(400).json({ error: "please enter valid food" });
    }
    const logs = await Log.addFood(user_id, foodId, amount);
    return res.status(200).json(logs)
}

const updateLog = async (req, res) => {
    const { id } = req.params;
    const { newAmount } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(403).json("Invalid log ID")
        }



        const updatedLog = await Log.findOneAndUpdate({
            _id: id
        }, {
            amount: newAmount
        })

        if (!updatedLog) {
            return res.status(404).json({ error: "Log not found" });
        }

        return res.status(200).json(updatedLog);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deleteFoodLog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No log" });
    }

    const log = await Log.findOneAndDelete({ _id: id });

    if (!log) {
        return res.status(400).json({ error: "No log" });
    }

    res.status(200).json(log);
}

module.exports = {
    getLogs,
    addFood,
    deleteFoodLog,
    updateLog
}