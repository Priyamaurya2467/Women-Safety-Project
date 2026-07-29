const mongoose = require("mongoose");

const safetyAreaSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    latitude:Number,

    longitude:Number,

    crimeScore:{
        type:Number,
        default:50
    },

    lightingScore:{
        type:Number,
        default:50
    },

    crowdScore:{
        type:Number,
        default:50
    }

});

module.exports = mongoose.model(
    "SafetyArea",
    safetyAreaSchema
);