const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const evidence= new mongoose.Schema({

     sosId: ObjectId,

  uploadedBy: ObjectId,

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

})


module.exports = mongoose.model("Evidence",evidence)