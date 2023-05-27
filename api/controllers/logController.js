const Log = require("../models/Log")

const getLogList = async (req, res) => {
    let logList = await Log.findOne({user: req.user.id})
        .populate("consumptions.food", ['name', 'calories', 'macros']);

        const logs = !logList ? [] : logList.consumptions.map(consumption => ({
            ...consumption.food.toObject(),
            quantity: consumption.quantity,
            calories: consumption.food.calories * consumption.quantity,
            id: consumption.id,
        }));

        res.json(logs);
}

const updateLogList = async (req, res) => {
    try {
        let logList = await Log.findOne({user: req.user.id })
        if (!logList) {
            logList = new Log({
                user: req.user.id
            })
        }

        const { consumptions } = req.body;
        logList.consumptions = consumptions;

        await logList.save();

        res.json("Updated log list successfully");

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    getLogList,
    updateLogList
}