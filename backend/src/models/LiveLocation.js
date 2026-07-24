const mongoose = require("mongoose")
const livelocation = new mongoose.Schema({

    userId: ObjectId,

  tripId: ObjectId,

  latitude: Number,

  longitude: Number,

  accuracy: Number,

  speed: Number,

  heading: Number,

  batteryPercentage: Number,

  networkType: String,

  timestamp: Date

})

module.exports = mongoose.model("livesocation",livelocation);