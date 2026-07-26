const cabverificationSchema = require('../models/CabVerification')

const verifyCab = async(req,res) => {
    try{

    
        const {vehicleNumber,vehicleModel,vehicleColor,driverName,driverPhoto,driverPhone,qrCode,verificationStatus} = req.body;

        
        

        const cabverificationData = await cabverificationSchema.create({
           userId:req.user.id, vehicleNumber,vehicleModel,vehicleColor,driverName,driverPhoto,driverPhone,qrCode,verificationStatus,verifiedAt: new Date()
        })
        return res.status(201).json({
            success: true,
            message: "Cab verified Successfully",
            data: cabverificationData

        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getHistory = async(req,res) => {
    try{
        const data = await cabverificationSchema.find({
            
            userId:req.user.id
            
        }).sort({createdAt: -1})

        
        

        return res.status(200).json({
            success: true,
            message: "History fectched successfully",
            data: data
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Not fetched"
        })
    }
}

const historyById = async(req,res)=>{
    try{
        const data = await cabverificationSchema.findOne({
        _id: req.params.id,
        userId: req.user.id
        })

        return res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data :data
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

const updateId = async(req,res) => {
    try{
        const {
            vehicleNumber,
            vehicleModel,
            vehicleColor,
            driverName,
            driverPhone,
            driverPhoto,
            qrCode,
            verificationStatus
        } = req.body;

        const cab = await cabverificationSchema.findOne({
            _id: req.params.id,
            userId: req.user.id
        })

        if(!cab){
            return res.status(401).json({
                status: false,
                message: "Cab Detail not found"
            })
        }

        cab.vehicleNumber = vehicleNumber || cab.vehicleNumber;
        cab.vehicleModel = vehicleModel || cab.vehicleModel;
        cab.vehicleColor = vehicleColor || cab.vehicleColor
        cab.driverName = driverName || cab.driverName;
        cab.driverPhone = driverPhone || cab.driverPhone
        cab.driverPhoto = driverPhoto || cab.driverPhoto,
        cab.qrCode = qrCode || cab.qrCode,
        cab.verificationStatus = verificationStatus || cab.verificationStatus

        await cab.save();
        return res.status(200).json({
            status: true,
            message: "Code updated successfully",
            data: cab
        })
    }catch(err){
        return res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

const deleteCab = async(req,res) => {
    try{
        const cab = await cabverificationSchema.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        })
        if(!cab){
            return res.status(404).json({
                success: false,
                message: "Cab not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Cab deleted successfully",
            data: cab

        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {verifyCab,getHistory,historyById,updateId,deleteCab}