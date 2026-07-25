const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const notification = new mongoose.Schema({
    receiverId: ObjectId,
    senderId: ObjectId,
    type: String,
    title: String,
    message: String,
    data: Object,
    isRead: Boolean,
    createdAt: Date


})

module.exports = mongoose.model("Notification",notification)