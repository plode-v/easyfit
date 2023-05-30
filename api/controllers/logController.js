const Log = require("../models/Log")
const mongoose = require("mongoose")

const getLogs = async (req, res) => {
    const user_id = req.user._id;
    const logs = await Log.getLogs(user_id)

    res.status(200).json(logs);
}

const addFoodToLog = async (req, res) => {

}