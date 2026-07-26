const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const community = new mongoose.Schema({

    
  reportedBy: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
  ],

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

},{
    timestamps: true
})


module.exports = mongoose.model("Community",community)