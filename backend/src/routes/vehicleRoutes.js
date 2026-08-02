const express = require('express')
const { verifyVehicle } = require('../controllers/vehicleController');

const router = express.Router();

router.post("/verify", verifyVehicle)

module.exports = router