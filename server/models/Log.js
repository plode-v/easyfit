const mongoose = require('mongoose')
const Food = require("./Food")

const logSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
    },
    amount: {
        type: Number,
        required: true,
        min: 0
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

logSchema.statics.addFood = async function(user_id, food_id, amount) {
    try {
        const food = await Food.findOne({_id: food_id})
        const log = await this.findOne({ _id: user_id });
        if (!log) {
            const newLog = await this.create({
                user_id,
                food,
                amount
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

logSchema.statics.deleteFoodFromlog = async function(id){
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw Error("Invalid log ID")
    }

    const log = await this.findOneAndDelete({_id: id});

    if (!log){
        throw Error("No log entry")
    }

    return log;
}

logSchema.statics.updateFood = async function(logId, newAmount) {
    try {
        if (!mongoose.Types.ObjectId.isValid(logId)) {
            throw Error("Invalid log ID");
        }

        const log = await this.findOneAndUpdate({
            _id: logId,
            amount: newAmount
        })

        if (!log) {
            throw Error("Log not found");
        }

        return log;

    } catch (err) {
        throw Error(err);
    }
}

module.exports = mongoose.model("Log", logSchema);