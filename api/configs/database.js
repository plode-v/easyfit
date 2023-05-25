const mongoose = require("mongoose")
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:admin123@members.6d53gxi.mongodb.net/EasyFit?retryWrites=true&w=majority`)

        console.log("Connected to MongoDB database");
    } catch (err) {
        console.error("Failed to connect to database", err);
        process.exit(1);
    }
}

module.exports = connectDB;