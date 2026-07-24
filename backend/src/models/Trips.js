const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const trips=mongoose.Schema({
   
  _id: ObjectId,

  userId: ObjectId,

  source: String,
  destination: String,

  startLatitude: Number,
  startLongitude: Number,

  endLatitude: Number,
  endLongitude: Number,

  currentLatitude: Number,
  currentLongitude: Number,

  routePolyline: String,

  transportMode: String,

  startTime: Date,
  endTime: Date,

  estimatedArrival: Date,

  status: {
    type: String,
    enum: [
      "ACTIVE",
      "COMPLETED",
      "CANCELLED"
    ]
  },

  cabVerificationId: ObjectId,

  sharedWith: [ObjectId],

  createdAt: Date

})

module.exports = mongoose.model("trip",trips)