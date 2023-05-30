const express = require("express")
const { login, register } = require('../controllers/userController');

const router = express.Router();

// login route
router.post("/login", login);

// register route
router.post("/register", register);

module.exports = router;