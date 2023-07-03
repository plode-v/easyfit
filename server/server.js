const express = require("express")
const { foodRoutes, userRoutes, logRoutes, profileRoutes } = require("./routes")
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require("cors")

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
}

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
app.use("/api/profiles", profileRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(process.env.PORT || 4000, () => {
            console.log(`listening for requests on port ${process.env.PORT || 4000}`)
        })
    })
    .catch(err => {
        console.log(err)
    })