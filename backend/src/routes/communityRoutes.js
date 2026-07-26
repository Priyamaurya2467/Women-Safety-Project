const express = require('express')

const route = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const {createIncident,getIncident,getIncidentById,putIncidentByid,deleteById} = require('../controllers/reportController')

route.post('/', authMiddleware,createIncident)
route.get('/',authMiddleware,getIncident)
route.get('/:id' ,authMiddleware,getIncidentById)
route.put('/:id',authMiddleware,putIncidentByid)
route.delete('/:id',authMiddleware,deleteById)

module.exports = route