const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const safetyGroup = new mongoose.Schema({
    groupName: String,
    groupCode: String,
    description: String,
    createdBy: ObjectId,
    members: [
        {
            userId: ObjectId,
            joinedAt: Date
        }
    ],
    createAt: Date
})

module.exports = mongoose.model("safetyGroup",safetyGroup)