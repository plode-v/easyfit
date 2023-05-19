const mongoose = require("mongoose")
require("dotenv").config();

module.exports = connect = () => mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASSWORD}@members.6d53gxi.mongodb.net/Users?retryWrites=true&w=majority`)
.then(() => {
    console.log("Connected to MongoDB database");
})
.catch((err) => {
    console.error(err);
})