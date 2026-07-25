const express = require('express')
const router = express.Router()

const {triggerSOS,getSos,getSosById,cancelSos,resolveSos} = require('../controllers/sosController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/trigger',authMiddleware,triggerSOS);
router.get('/history' , authMiddleware,getSos)
router.get('/:id' , authMiddleware,getSosById)
router.put('/:id/resolve' , authMiddleware,resolveSos)
router.put('/:id/cancel' , authMiddleware,cancelSos)


module.exports = router