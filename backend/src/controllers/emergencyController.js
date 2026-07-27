const { data } = require('react-router-dom');
const EmergencyAlert = require('../models/EmergencyAlertSchema')
const trustedcontacts = require('../models/TrustedContact')


const sendSos = async(req,res) => {
    try{
        const userId = req.user.id;

        const {longitude,latitude,address} = req.body;

        console.log(req.user)
        console.log(req.user.id)

        const contacts = await trustedcontacts.find({userId:req.user.id});
        console.log(contacts)
        if(contacts.length === 0){
            return res.status(404).json({
                success: false,
                message: "No contacts found"
            })
        }

        const alerts = await EmergencyAlert.create({
            userId,latitude,longitude,address,trustedContacts: contacts.map(contact => contact._id),message: "🚨 SOS! I need immediate help.",
    status: "Active" 
        })
        return res.status(201).json({
            success: true,
            message: "SOS sent success",
            data: alerts
        })
    }catch(err){
        return res.status(500).json({
            success: true,
            message: err.message
        })
    }
}
const sosHistory = async(req,res) => {
    try{
        const alerts = await EmergencyAlert.find({
            userId: req.user.id
        }).sort({createdAt: -1})

        return res.status(200).json({
            success: true,
            message: "sos alerts fetched",
            data: alerts
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const resolveAlert = async (req, res) => {
    try {

        const alert = await EmergencyAlert.findByIdAndUpdate(
            req.params.id,
            {
                status: "Resolved"
            },
            {
                returnDocument: "after"
            }
        );

        if (!alert) {
            return res.status(404).json({
                success: false,
                message: "Alert not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Alert resolved",
            data: alert
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {sendSos,sosHistory,resolveAlert}