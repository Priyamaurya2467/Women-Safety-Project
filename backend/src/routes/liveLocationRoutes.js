const express = require('express')

const {updateLocation,currentLocation,historyLocation} = require('../controllers/liveLocationController')
const authMiddleware = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/update' , authMiddleware,updateLocation)
route.get('/current' , authMiddleware,currentLocation)
route.get('/history' , authMiddleware,historyLocation)


module.exports = route