
const LiveLocation = require('../models/LiveLocation')


const updateLocation = async(req,res) => {
    try{

    
    const {userId,
    
    latitude,
    longitude,
    accuracy,
    speed,
    heading,
    batteryPercentage,
    networkType,
    timestamp}=req.body;

    const location = await LiveLocation.create({
         userId: req.user.id,
        
        latitude,
        longitude,
        accuracy,
        speed,
        heading,
        batteryPercentage,
        networkType,
        timestamp
    })

    return res.status(201).json({
        success: true,
        message: "Location updated Successfully"
    })
} catch(err){
    return res.status(500).json({
        success: true,
        message: err.message
    })
}
}

const currentLocation = async(req,res)=>{
    try{
        const location = await LiveLocation.findOne({userId:req.user.id}).sort({createdAt: -1})
        if(!location){
            return res.status(401).json({
                success:false,
                message: "Location not found"
            })
        }

        return res.status(201).json({
            success:true,
            message: "Location fetched",
            data: location
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const historyLocation = async(req,res)=>{
    try{
        const location = await LiveLocation.find({userId:req.user.id}).sort({createdAt: -1})
        if(!location){
            return res.status(401).json({
                success:false,
                message: "Location not found"
            })
        }

        return res.status(201).json({
            success:true,
            message: "Location fetched",
            count: location.length,
            data: location
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {updateLocation,currentLocation,historyLocation}