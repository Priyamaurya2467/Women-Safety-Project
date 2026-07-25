const mongoose = require("mongoose")
const livelocationSchema = new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },

  tripId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "trip"
    },

  latitude: Number,

  longitude: Number,

  accuracy: Number,

  speed: Number,

  heading: Number,

  batteryPercentage: Number,

  networkType: String,

  timestamp: Date

},{
  timestamps:true
})

module.exports = mongoose.model("livelocation",livelocationSchema);