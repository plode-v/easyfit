const Log = require("../models/Log")


// Create a new user food log entry
const createFoodLog = async (req, res) => {
    try {
        const { foodId } = req.body;

        const foodLog = new Log({
            foodId
        });

        await foodLog.save();
        res.status(201).json({ message: "Food log created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

// Get all food logs
const getFoodLog = async (req, res) => {
    try {
        const logs = await Log.find({}).sort({ date: -1 })

        res.status(200).json(logs)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message})
    }

}

const updateFoodLog = async (req, res) => {
    const { logId } = req.params;
    const { foodName } = req.body;

    try {
        const log = await Log.findOne(logId);

        if (!log) {
            return res.status(404).json({ error: "Log not found" })
        }

        log.foodIds.push(foodName);
        const updatedLog = await Log.save();

        res.json(updatedLog)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    createFoodLog,
    getFoodLog,
    updateFoodLog
}