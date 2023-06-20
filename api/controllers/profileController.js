const Profile = require("../models/Profile")

const getProfile = async (req, res) => {
    const user_id = req.user._id;

    if (!user_id) {
        return res.status(404).json("Invalid user ID");
    }

    const profile = await Profile.findOne({ user_id });
    return res.status(200).json(profile);
}

const createProfile = async (req, res) => {
    const user_id = req.user._id;

    // if calories is empty, make sure calories is auto caculated
    const {height, weight, age, gender, calories } = req.body;
    let emptyFields = []

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
        res.status(404).json({ error: "User ID invalid" });
    }

    if (emptyFields.length > 0) {
        res.status(400).json({ error: "Please fill in required fields" }, emptyFields);
    }

    try {
        const exists = await Profile.findOne({ user_id });

        if (exists) {
            res.status(401).json({ error: "Profile already exists" });
        }

        const profile = await Profile.create({
            height,
            weight,
            age,
            gender,
            calories,
            user_id
        })

        return res.status(200).json(profile)


    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const updateProfile = async (req, res) => {
    // TODO: new route for update profile
}

module.exports = {
    getProfile,
    createProfile,
    updateProfile
}