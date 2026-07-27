const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },

    type: {
      type: String,
      enum: ["SOS", "CAB", "INCIDENT", "GENERAL"],
      required: true
    },

    title: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    data: {
      type: Object,
      default: {}
    },

    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Notification", notificationSchema);