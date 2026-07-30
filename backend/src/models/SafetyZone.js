const mongoose = require('mongoose')

const safetyZoneSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        reqiured: true,
    },
    radius: {
        type: Number,
        default: 80,
    },
    crimeRate: {
        type: Number,
        default:20
    },
    lighting: {
        type: Number,
        deafult: 80,
    },
    crowdDensity: {
        type: Number,
        default: 70,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("SafetyZone",safetyZoneSchema)