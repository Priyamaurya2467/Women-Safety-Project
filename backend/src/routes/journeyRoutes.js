const express = require('express')
const {startJourney,endJourney} = require('../controllers/journeyController.js')

const authMiddleware = require('../middleware/authMiddleware.js')
const router=express.Router();

router.post("/start",authMiddleware,startJourney);

router.put("/end/:id",authMiddleware,endJourney);

module.exports = router