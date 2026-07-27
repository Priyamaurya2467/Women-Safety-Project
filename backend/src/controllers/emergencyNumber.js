const { data } = require("react-router-dom");
const TrustedContact = require("../models/TrustedContact")

const emergencyNumber = async(req,res) => {
    try{
        const numbers = [
            {
                name: "Police",
                number: "112"
            },
            {
                name: "Women Helpine",
                number: "181"
            },
            {
                name: "Ambulance",
                number: "108"

            },
            {
                name: "Fire Brigade",
                number: "101"
            }
        ];
        return res.status(200).json({
            success: true,
            message: "Emergency numbers fetched successfully",
            data: numbers
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const quickCallContacts = async(req,res) =>{
    try{
        const contacts = await TrustedContact.find({
            userId: req.user.id
        }).select("name phone relationship priority");

        return res.status(200).json({
            success: true,
            message: "Trusted contacts fetched successfully",
            data: contacts
        })
    }  catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {emergencyNumber, quickCallContacts}