const express = require("express");
const router = express.Router();

const {
  startJourney,
  getActiveJourney,
  endJourney,
} = require("../controllers/journeyController");

const authMiddleware = require("../middleware/authMiddleware");


// Start journey
router.post("/start",authMiddleware,startJourney);


// Get active journey
router.get("/active",authMiddleware,getActiveJourney);

// End journey
router.put("/end/:id",authMiddleware,endJourney);


module.exports = router;