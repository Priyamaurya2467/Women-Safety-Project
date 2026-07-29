const express = require('express')
const {getLiveTracking} = require('../controllers/trackingController')

const router = express.Router();

router.get('/:token',getLiveTracking)

module.exports = router