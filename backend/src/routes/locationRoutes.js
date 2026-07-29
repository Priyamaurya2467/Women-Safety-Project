const express = require('express')

const authMiddleware = require('../middleware/authMiddleware.js')

const {
    startSharing,
    stopSharing,
    updateLocation,
    getMyLocation,
    getUserLocation,
} =require("../controllers/locationController.js");

const router = express.Router();

router.post("/start", authMiddleware, startSharing);

router.post("/update", authMiddleware, updateLocation);

router.post("/stop", authMiddleware, stopSharing);

router.get("/", authMiddleware, getMyLocation);

router.get("/:userId", authMiddleware, getUserLocation);

module.exports = router