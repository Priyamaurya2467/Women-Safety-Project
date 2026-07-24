const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const trustedContacts = new mongoose.Schema({
    userId: ObjectId,
    name:String,
    phone:String,
    email:String,

    relationship: String,

    priority: Number,

    canTrackLocation: Boolean,
    createdAt: Date
})


exports.mongoose = mongoose.model("trustedContact",trustedContacts)
