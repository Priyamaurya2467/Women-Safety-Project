const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const aichat = new mongoose.Schema({

    userId: ObjectId,
    messages: [
        {
            role: String,
            content: String,
            timeStamp: Date
        }
    ],

    createAt: Date

})