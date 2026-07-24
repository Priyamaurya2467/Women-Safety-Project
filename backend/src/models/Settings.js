const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        _id: ObjectId,
        fullName: String,
        email: String,
        phone: String,
        password: String,

        profileImage: String,
        gender: String,
        dob:Date,
        bloodGroup: String,
        medicalConditions: [String],
        allergies: [String],

        role: {
            type: String,
            enum: [
                "User","Family","Admin"
            ]
        }
    }
)