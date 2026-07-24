const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const community = new mongoose.Schema({

    
  reportedBy: ObjectId,

  category: String,

  title: String,

  description: String,

  latitude: Number,

  longitude: Number,

  images: [String],

  severity: String,

  anonymous: Boolean,

  status: {
      type: String,
      enum: [
          "PENDING",
          "VERIFIED",
          "REJECTED"
      ]
  },

  verifiedBy: ObjectId,

  createdAt: Date

})


module.exports = mongoose.model("Community",community)