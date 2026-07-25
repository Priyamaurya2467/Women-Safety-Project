const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminId: ObjectId,
    action:String,
    targetCollection: String,
    targetId: ObjectId,
    description: String,
    createdAt: Date

})


module.exports = mongoose.model('Admin',adminSchema)