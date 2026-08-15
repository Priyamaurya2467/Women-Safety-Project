const Journey = require("../models/Journey");
const { v4: uuidv4 } = require("uuid");

const startJourney = async (req, res) => {
  try {
    const { startLocation, destination, distance, estimatedTime } = req.body;

    const trackingToken = uuidv4();

    const journey = await Journey.create({
      user: req.user.id,
      trackingToken,
      startLocation,
      destination,
      distance,
      estimatedTime,
      status: "active",
      startedAt: new Date(),
    });

    res.status(201).json({
      success: true,
      data: journey,
      trackingLink: `http://localhost:5173/live/${trackingToken}`,
    });

  } catch (error) {
    console.log("Start Journey Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getActiveJourney = async (req, res) => {
  try {
    const journey = await Journey.findOne({
      user: req.user.id,
      status: "active",
    }).sort({ createdAt: -1 });

    if (!journey) {
      return res.status(404).json({
        success: false,
        message: "No active journey found",
      });
    }

    res.status(200).json({
      success: true,
      journey,
    });

  } catch (error) {
    console.error("Get active journey error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const endJourney = async (req, res) => {
  try {

    const journey = await Journey.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!journey) {
      return res.status(404).json({
        success: false,
        message: "Journey not found",
      });
    }

    journey.status = "completed";
    journey.endedAt = new Date();

    await journey.save();

    res.json({
      success: true,
      data: journey,
    });

  } catch (error) {

    console.log("End Journey Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  startJourney,
  getActiveJourney,
  endJourney,
};