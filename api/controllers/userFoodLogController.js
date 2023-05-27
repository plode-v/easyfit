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

module.exports = {
    createFoodLog,
    getFoodLog
}