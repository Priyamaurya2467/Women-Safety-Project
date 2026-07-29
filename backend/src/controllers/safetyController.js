const SafetyArea = require("../models/SafetyArea");

const getSafetyScore = async(req,res)=>{

try{

const areas = await SafetyArea.find();

res.json({

success:true,

areas

});

}catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

module.exports={

getSafetyScore

};