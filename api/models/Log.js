const mongoose = require('mongoose')
const Food = require("./Food")

const logSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
    }
},{
    timestamps: true
});

logSchema.statics.getLogs = async (user_id) => {
    const logs = await this.find({ user_id }).sort({ createdAt: -1 });

    if (!user_id) {
        throw Error("You are not authorized")
    }
    if (!logs) {
        throw Error("There is no log")
    }

    res.status(200).json(logs);
}

logSchema.statics.addFood = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await Food.findOne({ _id: id }).select("_id");

        if (!mongoose.Types.ObjectId.isValid(id) || !food) {
            return res.status(404).json({ error: "No such food" });
        }

        res.status(200).json(food);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

logSchema.statics.deleteFoodFromlog = async (req, res) => {
    try {
        const userId = req.user.id;
        const { _id } = req.params;

        const logEntry = await this.findById(userId);
        if (!userId) {
            return res.status(404).json({ error: "Log entry not found" });
        }

        logEntry.food = logEntry.food.filter((food) => {
            food.toString() !== _id
        });
        await logEntry.save();

        return res.status(200).json({ message: "Food deleted from log successful" });
    } catch(err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = mongoose.model("Log", logSchema);