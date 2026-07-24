const mongoose = require("mongoose")
const cabVeri = new mongoose.Schema({

      tripId: ObjectId,

  userId: ObjectId,

  vehicleNumber: String,

  vehicleModel: String,

  vehicleColor: String,

  driverName: String,

  driverPhone: String,

  driverPhoto: String,

  qrCode: String,

  verificationStatus: String,

  verifiedAt: Date

})

module.exports = mongoose.model("cabverification",cabVeri)