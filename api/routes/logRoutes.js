const express = require('express');
const { getLogList, updateLogList } = require('../controllers/logController');
const router = express.Router();

// get all log
router.get("/list", getLogList);

router.put("/list", updateLogList)

module.exports = router;