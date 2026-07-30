const Journey = require("../models/Journey");
const { v4: uuidv4 } = require("uuid");

const startJourney = async (req, res) => {
  try {
    const {
      startLocation,
      destination,
      distance,
      estimatedTime,
    } = req.body;

    const trackingToken = uuidv4();

    const journey = await Journey.create({
      user: req.user.id,
      trackingToken,
      startLocation,
      destination,
      distance,
      estimatedTime,
    });

    res.status(201).json({
      success: true,
      data: journey,
      trackingLink: `http://localhost:5173/live/${trackingToken}`,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const endJourney = async (req, res) => {
  try {
    const journey = await Journey.findOne({
      _id:req.params.id,
      user: req.user.id
    })

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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  startJourney,
  endJourney,
};