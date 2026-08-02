const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema(
  {
    plateNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    verified: {
      type: Boolean,
      default: true,
    },

    driverName: {
      type: String,
      required: true,
      trim: true,
    },

    driverPhone: {
      type: String,
      required: true,
      trim: true,
    },

    cabCompany: {
      type: String,
      enum: ["Uber", "Ola", "Rapido", "Private"],
      default: "Private",
    },

    vehicleType: {
      type: String,
      enum: ["Sedan", "SUV", "Hatchback", "Bike", "Auto"],
      required: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    color: {
      type: String,
      required: true,
      trim: true,
    },

    registrationState: {
      type: String,
      required: true,
      trim: true,
    },

    rcVerified: {
      type: Boolean,
      default: true,
    },

    insuranceValid: {
      type: Boolean,
      default: true,
    },

    emergencyReported: {
      type: Boolean,
      default: false,
    },

    remarks: {
      type: String,
      default: "",
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports= mongoose.model("Vehicle", vehicleSchema);