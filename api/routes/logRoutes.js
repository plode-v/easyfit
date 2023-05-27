const express = require('express');
const { createFoodLog, getFoodLog, updateFoodLog } = require("../controllers/userFoodLogController")
const router = express.Router();

// get all log
router.get("/", getFoodLog)

// create log
router.post("/", createFoodLog)

router.patch("/:logId", updateFoodLog)

module.exports = router;