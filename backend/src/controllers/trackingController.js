const Journey = require('../models/Journey')
const Location = require('../models/Location')

const getLiveTracking = async(req,res) =>{
    try{
        const journey = await Journey.findOne({
            trackingToken: req.params.token
        })

        if(!journey){
            return res.status(404).json({
                success: false,
                message: "Journey not found"
            })
        }
        const location = await Location.findOne({
            user:journey.user
        });
        res.json({
            success:true,journey,location
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}