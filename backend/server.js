const mongoose = require("mongoose")
const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config();


const app = express();
app.use(express.json());

const secretKey = "my-secret-key"

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASSWORD}@members.6d53gxi.mongodb.net/users?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User alredy exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });

        res.status(200).json({ token });
    } catch (err) {
        console.error("Error loggin in:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/protected", (req, res) => {
    const token = req.headers.authorizations;

    if (!token) {
        return res.status(401).json({ message: "Missing authorization token" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token"})
        }
        const userId = decoded.userId;
    
        res.status(200).json({ message: `Protected data for user ${userId}`});
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});