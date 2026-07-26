const express = require('express')
const router = express.Router()
const {verifyCab,getHistory,historyById,updateId,deleteCab} = require('../controllers/cabVerificationController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/verify' ,authMiddleware, verifyCab)
router.get('/history' ,authMiddleware, getHistory)
router.get('/:id',authMiddleware,historyById)
router.put('/:id' , authMiddleware,updateId)
router.delete('/:id', authMiddleware,deleteCab )


module.exports = router