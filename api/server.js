const express = require("express")
const session = require("express-session");
const passport = require("./configs/passport")
const authRoutes = require("./routes/authRoutes")
const connectDB = require("./configs/database");
const cors = require("cors");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport, session());
app.use(authRoutes)

app.listen(3000, () => console.log("Server started on port 3000"));