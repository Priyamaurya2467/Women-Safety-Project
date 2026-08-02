const Vehicle = require('../models/Vehicle')

const verifyVehicle = async (req, res) => {
  try {
    const { plateNumber } = req.body;

    if (!plateNumber) {
      return res.status(400).json({
        success: false,
        message: "Vehicle number is required.",
      });
    }

    const vehicle = await Vehicle.findOne({
      plateNumber: plateNumber.trim().toUpperCase(),
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        verified: false,
        message: "Vehicle not found.",
      });
    }

    return res.status(200).json({
      success: true,
      verified: vehicle.verified,
      vehicle,
    });
  } catch (error) {
    console.error("Vehicle Verification Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


module.exports = {verifyVehicle}