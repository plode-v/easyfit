const express = require('express');
const auth = require("../middleware/auth")
const { login, register, updateProfile, checkSelf } = require('../controllers/authController');
const router = express.Router();

router.get("/", auth, checkSelf);

router.post("/register", register)

router.post("/login", login)

router.put("/profile", updateProfile)

module.exports = router;