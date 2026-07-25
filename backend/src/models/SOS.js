const mongoose = require("mongoose")


const sos = new mongoose.Schema({

      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },

  tripId: {


        type: mongoose.Schema.Types.ObjectId,

        ref: "trip"


  },

  emergencyType: String,

  latitude: Number,

  longitude: Number,

  address: String,

  status: {
      type: String,
      enum: [
          "ACTIVE",
          "RESPONDED",
          "RESOLVED",
          "CANCELLED"
      ],
      default: "ACTIVE"
  },

   notifiedContacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TrustedContact",
        },
    ],

  responseTime: {
    type: Number,
    default: 0
  },

  createdAt: Date

},{
    timestamps: true
})


module.exports = mongoose.model("SOS",sos)