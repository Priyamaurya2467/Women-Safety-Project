const express = require('express')
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware')
const {emergencyNumber,quickCallContacts} = require('../controllers/emergencyNumber')

router.get('/emergency-number',authMiddleware,emergencyNumber);
router.get('/trusted-contact/call',authMiddleware,quickCallContacts)
module.exports = router