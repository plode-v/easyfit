const express = require("express")
const { foodRoutes, userRoutes } = require("./routes")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// routes
app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(PORT, () => {
            console.log(`listening for requests on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })