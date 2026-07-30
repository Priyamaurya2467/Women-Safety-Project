const {getNearestZone} = require('./safetService')

const monitorJourney = async (latitude, longitude, deviation = 0) => {

  const zone = await getNearestZone(latitude, longitude);

  let safe = true;
  let alert = null;

  if (!zone) {
    return {
      safe: false,
      score: 0,
      zone: null,
      alert: "No safety zone found."
    };
  }

  if (zone.safetyScore < 50) {
    safe = false;
    alert = "You have entered a low safety area.";
  }

  if (deviation > 200) {
    safe = false;
    alert = "You have deviated from your planned route.";
  }

  return {
    safe,
    score: zone.safetyScore,
    zone: zone.name,
    alert,
  };
};

module.exports = {
  monitorJourney,
};