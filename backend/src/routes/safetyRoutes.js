const express = require('express');
const {getSafety} = require('../controllers/safetyController')

const router = express.Router()

router.get('/', getSafety)

module.exports = router