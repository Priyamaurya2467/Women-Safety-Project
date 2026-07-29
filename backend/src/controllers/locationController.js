const Location = require('../models/Location')


const startSharing = async (req, res) => {
  try {
    console.log("req.user =", req.user);
    console.log("body=",req.body)

    const {latitude,longitude} = req.body

    let location = await Location.findOne({
      user: req.user.id,
    });

    console.log("Existing location =", location);

    if (!location) {
      location = await Location.create({
        user: req.user.id,
        latitude,
        longitude,
        isSharing: true,
      });
    } else {
        location.longitude = longitude;
        location.latitude = latitude;
        location.isSharing = true;
        await location.save();
    }

    res.status(200).json({
      success: true,
      data: location,
    });

  } catch (error) {
    console.error("START SHARING ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateLocation = async (req,res)=>{

    try{

        const {latitude,longitude,accuracy}=req.body;

        const location = await Location.findOneAndUpdate(

            {
                user:req.user.id
            },

            {
                latitude,
                longitude,
                accuracy,
                isSharing:true
            },

            {
                new:true,
                upsert:true,
                runValidators:true,
                setDefaultsOnInsert:true
            }

        );

        res.status(200).json({
            success:true,
            data:location
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const stopSharing = async (req, res) => {
  try {

    const location = await Location.findOne({
      user: req.user.id,
    });

    if (location) {

      location.isSharing = false;
      await location.save();

    }

    res.status(200).json({
      success: true,
      message: "Location sharing stopped",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMyLocation = async (req,res)=>{

    try{

        const location = await Location.findOne({
            user:req.user.id
        });

        res.status(200).json({
            success:true,
            data:location
        });

    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const getUserLocation = async (req, res) => {
  try {

    const location = await Location.findOne({
      user: req.params.userId,
    });

    res.status(200).json({
      success: true,
      data: location,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {startSharing,updateLocation,stopSharing,getMyLocation,getUserLocation}