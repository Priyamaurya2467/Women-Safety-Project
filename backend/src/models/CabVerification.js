const mongoose = require("mongoose")
const cabVeri = new mongoose.Schema({

      tripId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "trip",
          default: null
        }
      ],

  userId: [
    {

         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
         default: true

    }
  ],

  vehicleNumber: [
    {
      type: String,
      required: true,
      trim: true,
      uppercase: true
    }

  ],

  vehicleModel: [
    {

    type: String,
      required: true,
      trim: true,
    }
  ],

  vehicleColor: [
    {
      type: String,
      required: true,
     
    }
  ],

  driverName: [
    {
      type: String,
      required: true,
      trim: true,
    }
  ],

  driverPhone: [
    {
      type: String,
      required: true,
      
    }
  ],

  driverPhoto: [
    {
      type: String,
      default: ""
    }
  ],

  qrCode: [
    {
       type: String,
       default: ""
    }
  ],

  verificationStatus: [
    {
      type: String,
      enum: ["PENDING", "VERIFIED", "FAILED"],
      default: "PENDING",
    }
  ],

  verifiedAt: [
    {
      type: Date,
      default: true
    }
  ]

},{
  timestamps: true,
})

module.exports = mongoose.model("cabverification",cabVeri)