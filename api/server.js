const express = require("express")
const { foodRoutes, userRoutes, logRoutes } = require("./routes")
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require("cors")

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// routes
app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);
app.use('/api/logs', logRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen("http://54.219.207.28:3000", () => {
            console.log(`listening for requests on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })