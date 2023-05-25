// const express = require("express")
// const session = require("express-session");
// const passport = require("./configs/passport")
// const authRoutes = require("./routes/authRoutes")
// const connectDB = require("./configs/database");

// const app = express();

// connectDB();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//     session({
//         secret: "secret",
//         resave: false,
//         saveUninitialized: false,
//     })
// );
// app.use(passport.initialize());
// app.use(passport, session());
// app.use(authRoutes)

// app.listen(3000, () => console.log("Server started on port 3000"));


const express = require("express")
const foodRoutes = require("./routes/foodRoutes")
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next();
// });

// routes
app.use("/api/foods", foodRoutes)

// connect to db
mongoose.connect(`mongodb+srv://admin:admin123@members.6d53gxi.mongodb.net/EasyFit?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected to database")
        app.listen(4000, () => {
            console.log("listening for requests on port 4000")
        })
    })
    .catch(err => {
        console.log(err)
    })