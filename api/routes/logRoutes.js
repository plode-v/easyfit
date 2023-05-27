const express = require('express');
const { createFoodLog, getFoodLog } = require("../controllers/userFoodLogController")
const router = express.Router();

// get all log
router.get("/", getFoodLog)

// create log
router.post("/", createFoodLog)

module.exports = router;