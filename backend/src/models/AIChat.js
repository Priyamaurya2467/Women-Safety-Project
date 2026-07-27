const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const aichat = new mongoose.Schema({

    userId: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ,
    messages: [
        {
            role: {
                type: String,
                enum: ["user","assistant"],
                required: true
            },
            content: String,
            timeStamp: {
                type: Date,
                default: Date.now
            }
        }
    ],

    

},{
    timestamps: true
})


module.exports = mongoose.model("AIChat", aichat)