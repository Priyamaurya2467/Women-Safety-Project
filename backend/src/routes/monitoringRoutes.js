const express = require("express");

const {
  checkJourney,
} = require('../controllers/monitoringController');

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/check",
  authMiddleware,
  checkJourney
);

module.exports = router;