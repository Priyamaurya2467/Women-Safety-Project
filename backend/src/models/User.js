const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        
        fullName: String,
        email: {
            type: String,
            unique:true,

        },
        phone: {
            type: String,
            unique:true,

        },
        password: String,

        profileImage: String,
        gender: String,
        dob:Date,
        address:String,
        bloodGroup: String,
        medicalConditions: [String],
        allergies: [String],

        role: {
            type: String,
            enum: [
                "User","Family","Admin"
            ]
        },
        firebaseUID: String,

        isVerified: Boolean,
        isOnline: Boolean,

        createdAt: Date,
        updatedAt: Date
        


    }
)


module.exports = mongoose.model("User",user);