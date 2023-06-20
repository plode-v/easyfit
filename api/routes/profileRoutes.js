const express = require('express');
const router = express.Router();
const { getProfile, createProfile } = require("../controllers/profileController")
const auth = require("../middleware/auth")

router.use(auth)

// get profiles
router.get("/", getProfile)

// create profile
router.post("/", createProfile)


module.exports = router;