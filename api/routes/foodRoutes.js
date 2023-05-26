const express = require("express")
const { getFoods, getFood, createFood, deleteFood, updateFood } = require("../controllers/foodController")
const router = express.Router();
const Food = require("../models/Food")

// get all food
router.get("/", getFoods);

// get a single food
router.get("/:name", getFood);

// create new food
router.post("/", createFood)

// DELETE food
router.delete("/:id", deleteFood)

// UPDATE food
router.patch("/:id", updateFood)

module.exports = router;