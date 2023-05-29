const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minLength: 6
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: "Profile"
    }
}, { timestamps: true })


// register
userSchema.statics.register = async function(email, password, username) {
    if (!email || !password || !username) {
        throw Error("All fields must be filled")
    } 
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Pasword is not strong enough")
    }

    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("Email already exists")
    }
    const hashedPassword = bcrypt.hash(password, 10);

    const newUser = await this.create({
        username,
        email,
        password: hashedPassword
    })

    return newUser;
}

// login
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Email or password is incorrect")
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw Error("Email or password is incorrect")
    }

    return user;
}

module.exports = User = mongoose.model("User", userSchema);

