const express = require('express')

const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

const {addContacts,getContacts,updateContacts,deleteContacts} = require('../controllers/trustedContactController')
router.post('/',authMiddleware,addContacts)
router.get('/',authMiddleware,getContacts)
router.put('/:id',authMiddleware,updateContacts)
router.delete('/:id',authMiddleware,deleteContacts)

module.exports = router