const mongoose = require("mongoose")

const sos = new mongoose.Schema({

      userId: ObjectId,

  tripId: ObjectId,

  emergencyType: String,

  latitude: Number,

  longitude: Number,

  address: String,

  status: {
      type: String,
      enum: [
          "ACTIVE",
          "RESPONDED",
          "RESOLVED"
      ]
  },

  notifiedContacts: [ObjectId],

  responseTime: Number,

  createdAt: Date

})


module.exports = mongoose.model("SOS",sos)