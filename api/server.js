const express = require("express")
const foodRoutes = require("./routes/foodRoutes")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// routes
app.use("/api/foods", foodRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(3000, () => {
            console.log("listening for requests on port 3000")
        })
    })
    .catch(err => {
        console.log(err)
    })