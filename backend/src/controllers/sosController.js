const mongoose = require('mongoose')
const sosModel = require('../models/SOS')
const TrustedContactModel = require('../models/TrustedContact');
const { MessageCircleOff } = require('lucide-react');
const { data } = require('react-router-dom');

const triggerSOS = async(req,res) => {
    try{

    
    const {emergencyType , latitude,longitude,address} = req.body;

    const contact = await TrustedContactModel.find({
        userId: req.user.id
    });

    if(contact.length === 0){
        return res.status(400).json({
            success: true,
            message: "No trusted contact found"
            
        })
    }

    const contactIds = contact.map(contact=>contact._id)

    const sos = await sosModel.create({
        userId:req.user.id,
        emergencyType,
        latitude,longitude,address,notifiedContacts:contactIds
    });

    return res.status(201).json({
        success: true,
        Message: "SOS Triggered Successfully",
        data: sos
    })
}catch(err){
    return res.status(500).json({
        success: false,
        message: err.message
    })
}
}
const getSos = async(req,res) => {
    
    try{
        const history = await sosModel.find({
            userId: req.user.id
        }).sort({createdAt: -1})

        return res.status(200).json({
            success: true,
            count: history.length,
            data:history
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message: err.message
        })
    }
}
const getSosById = async(req,res) => {
    try{
        const sos = await sosModel.findOne({
            _id:req.params.id,
            userId:req.user.id
        })

        if(!sos){
            return res.status(404).json({
                success: false,
                message: "SOS not found"
            })
        }

        return res.status(201).json({
            success: true,
            message: "SOS found successfully",
            data:sos
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const cancelSos = async(req,res)=>{
    try{
        const sos = await sosModel.findOne({
            _id: req.params.id,
            userId: req.user.id
        });
        if(!sos){
            return res.status(401).json({
                status: false,
                message: "Sos not found"
            })
        }

        sos.status = "CANCELLED"
        await sos.save();

        return res.status(201).json({
            success: true,
            message: "SOS cancelled successfully",
            data: sos
        })
    }catch(err){
        return res.status(500).json({

            success: false,
            message: err.message

        })
        
    }
}
const resolveSos = async(req,res)=>{
    try{
        const sos = await sosModel.findOne({
            _id: req.params.id,
            userId: req.user.id
        });
        if(!sos){
            return res.status(401).json({
                status: false,
                message: "Sos not found"
            })
        }

        sos.status = "RESOLVED"
        await sos.save();

        return res.status(201).json({
            success: true,
            message: "SOS resolved successfully",
            data: sos
        })
    }catch(err){
        return res.status(500).json({

            success: false,
            message: err.message

        })
        
    }
}
module.exports = {triggerSOS,getSos,getSosById,cancelSos,resolveSos}