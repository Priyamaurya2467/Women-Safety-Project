const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const trustedContactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:String,

    relationship: String,

    priority: Number,

    canTrackLocation: Boolean,
    
},{
    timestamps: true
})


module.exports = mongoose.model("TrustedContact",trustedContactSchema)
