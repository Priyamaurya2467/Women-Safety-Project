const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {


         userId: ObjectId,

  notificationsEnabled: Boolean,

  locationSharing: Boolean,

  darkMode: Boolean,

  language: String,

  emergencyCountdown: Number,

  updatedAt: Date
       
        

    }
)


module.exports = mongoose.model("Setting",settingSchema);