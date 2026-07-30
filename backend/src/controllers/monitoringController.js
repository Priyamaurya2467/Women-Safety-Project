const { monitorJourney } = require("../services/monitoringService");

const checkJourney = async (req, res) => {
  try {

    const {
      latitude,
      longitude,
      deviation,
    } = req.body;

    if (latitude == null || longitude == null) {
      return res.status(400).json({
        success: false,
        message: "Latitude and longitude are required.",
      });
    }

    const result = await monitorJourney(
      Number(latitude),
      Number(longitude),
  
      Number(deviation || 0)
    );

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  checkJourney,
};