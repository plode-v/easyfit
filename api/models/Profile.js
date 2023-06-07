const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    height: {
        type: Number,
        required: true,
        min: 1
    },
    weight: {
        type: Number,
        min: 1,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    calories: Number,
    user_id: {
        type: String,
        required: true
    }
});

// getProfile
profileSchema.statics.getProfile = async function(user_id) {
    if (!user_id) {
        throw Error("Invalid user ID");
    }

    const profile = await this.findOne({ _id: user_id });

    return profile;
}

// createProfile
profileSchema.statics.createProfile = async function(height, weight, age, gender, calories, user_id) {
    let emptyFields = [];

    if (!height) {
        emptyFields.push("height");
    }

    if (!weight) {
        emptyFields.push('weight');
    }
    
    if (!age) {
        emptyFields.push('age');
    }

    if (!gender) {
        emptyFields.push('gender');
    }

    if (!user_id) {
        throw Error("User ID invalid")
    }

    if (emptyFields.length > 0) {
        throw Error("Please fill in required fields", emptyFields);
    }

    try {

        const exists = await this.findOne({ user_id });

        if (exists) {
            throw Error("Profile already exists")
        }

        const profile = await this.create({ height, weight, age, gender, calories, user_id })
        return profile;
    } catch (err) {
        throw Error(err);
    }
}


// updatProfile


module.exports = mongoose.model("Profile", profileSchema);