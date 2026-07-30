const SafetyZone = require('../models/SafetyZone')

const getNearestZone = async(latitude,longitude)=>{
    const zones = await SafetyZone.find();

    console.log("Zones:",zones)

    let nearest = null;
    let minDistance = Infinity;

    zones.forEach((zone)=>{
        const distance = Math.sqrt(
            Math.pow(latitude-zone.latitude,2)+Math.pow(longitude-zone.latitude,2)

        );

        if(distance < minDistance){
            minDistance = distance;
            nearest = zone;
        }
    });
    return nearest;
}

module.exports = {getNearestZone}