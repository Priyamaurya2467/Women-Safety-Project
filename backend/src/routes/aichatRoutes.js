const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const {aichat,aichatHistory,deleteChatHistory} = require('../controllers/aichatController')

router.post('/chat', authMiddleware,aichat)
router.get('/history', authMiddleware,aichatHistory)
router.delete('/delete/:id' , authMiddleware,deleteChatHistory)

module.exports = router 