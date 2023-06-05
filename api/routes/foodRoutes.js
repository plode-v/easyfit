const express = require("express")
const { getFoods, getFood, createFood, deleteFood, updateFood } = require("../controllers/foodController")
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth);

// get all food
router.get("/", getFoods);

// get a single food
router.get("/getFood/:id", getFood);

// create new food
router.post("/", createFood)

// DELETE food
router.delete("/:id", deleteFood)

// UPDATE food
router.patch("/:id", updateFood)

module.exports = router;