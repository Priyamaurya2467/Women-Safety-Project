const express = require('express')
const {sendSos,sosHistory,resolveAlert} = require('../controllers/emergencyController')
const authMiddleware = require('../middleware/authMiddleware');


const route = express.Router();


route.post('/sos',authMiddleware,sendSos)
route.get('/history', authMiddleware,sosHistory)
route.put('/resolve/:id' , authMiddleware,resolveAlert)



module.exports = route