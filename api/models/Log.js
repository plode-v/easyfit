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

logSchema.statics.searchLogs = async function(user_id) {
    const logs = await this.find({ user_id }).sort({ createdAt: -1 });

    if (!user_id) {
        throw Error("You are not authorized")
    }
    if (!logs) {
        throw Error("There is no log")
    }

    return logs;
}

logSchema.statics.addFood = async function(user_id, food_id) {
    try {
        const food = await Food.findOne({_id: food_id})
        const log = await this.findOne({ _id: user_id });
        if (!log) {
            const newLog = await this.create({
                user_id,
                food
            })
            await newLog.save();
        }

        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw Error("No such food")
        }
        
        return food

    } catch (err) {
        throw Error(err)
    }
}

logSchema.statics.deleteFoodFromlog = async function(user_id, food_id){
    try {
        const logEntry = await this.findOne({ user_id });
        const food = await Food.findById({ _id: food_id });
        if (!user_id) {
            throw Error("Log entry not found")
        }

        if(!food) {
            throw Error("Food not found");
        }

        logEntry.food = logEntry.food.filter((food) => {
            food.toString() !== _id
        });
        await logEntry.save();

    } catch(err) {
        throw Error(err.message)
    }
}

module.exports = mongoose.model("Log", logSchema);