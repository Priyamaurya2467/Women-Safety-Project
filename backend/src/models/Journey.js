const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    startLocation:{
        latitude:Number,
        longitude:Number
    },

    destination:{
        name:String,
        latitude:Number,
        longitude:Number
    },

    distance:Number,

    estimatedTime:Number,

    startedAt:{
        type:Date,
        default:Date.now
    },

    endedAt:Date,

    status:{
        type:String,
        enum:["active","completed","cancelled"],
        default:"active"
    },

    trackingToken:{
    type:String,
    unique:true
}

},
{
    timestamps:true
});

module.exports= mongoose.model("Journey",journeySchema);