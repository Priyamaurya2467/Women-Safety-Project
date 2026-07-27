const mongoose = require('mongoose');

const emergencyAlertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    trustedContacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "trustedcontacts"
        }
    ],
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        default: ""
    },
    message: {
        type: String,
        default: "🚨 SOS! I need immediate help."
    },
    status: {
        type: String,
        enum: ["Active","Resolved"],
        default: "Active"
    }
},
{
    timestamps: true
})


module.exports = mongoose.model("EmergencyAlert", emergencyAlertSchema)