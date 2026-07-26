
const mongoose = require("mongoose");

const evidence= new mongoose.Schema({

     sosId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sos",
        
     },

  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },

  fileType: {
      type: String,
      enum: [
          "IMAGE",
          "VIDEO",
          "AUDIO"
      ]
  },

  fileUrl: String,

  thumbnail: String,

  uploadedAt: Date

},{
    timestamps: true
})


module.exports = mongoose.model("Evidence",evidence)