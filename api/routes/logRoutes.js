const express = require("express")
const { getLogs, addFood, deleteFoodLog } = require("../controllers/logController")
const auth = require("../middleware/auth")
const router = express.Router()

router.use(auth)

router.get("/", getLogs)
router.post("/", addFood)
router.delete("/:id", deleteFoodLog)

module.exports = router;