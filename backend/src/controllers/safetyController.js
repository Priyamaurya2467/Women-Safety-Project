
const {getNearestZone} = require('../services/safetService')
const getSafety = async(req,res)=>{
    try{
        const {latitude,longitude} = req.query;
        if(!latitude || !longitude){
            return res.status(400).json({
                success: false,
                message: "Latitude and Longitude required"
            })
        }
        const zone = await getNearestZone (Number(latitude),Number(longitude));

        if(!zone){
            return res.status(404).json({
                success: false,
                message: "No safety zone found"
            })
        }
        res.json({
            success: true,
            zone,
            SafetyScore:zone.SafetyScore,
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {getSafety}