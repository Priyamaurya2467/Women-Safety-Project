const { data } = require('react-router-dom');
const trustedContact = require('../models/TrustedContact')


const addContacts = async(req,res) => {
    try{
        const {name,phone,email,relationship,priority,canTrackLocation} = req.body;

        const userNumberExist = await trustedContact.findOne({phone});

        if(userNumberExist){
            return res.status(400).json({
                success: false,
                message: "Number Already Exist"
            }
        )}

        const emailExist = await trustedContact.findOne({email})

        if(emailExist){
            return res.status(400).json({
                success: false,
                message: "Email Already Exist"
            })
        }
        const TrustedContact = await trustedContact.create({
            userId: req.user.id,
            name,phone,email,relationship,priority,canTrackLocation
        })

        res.status(201).json({
            success: true,
            message: "Contact Added Successfully",
            data: TrustedContact
            
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const fetchContacts = async(req,res)=> {
    try{
        const contacts = await trustedContact.find({
            userId: req.user.id
        });
        res.status(200).json({
            success: true,
            data: contacts
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}
const updateContacts = async(req,res) => {
    try{
        const {name,phone,email,relationship,priority,canTrackLocation} = req.body;

        const contact = await trustedContact.findOne({
            _id: req.params.id,
            userId: req.user.id,
        });
        if(!contact){
            return res.status(400).json({
                status: false,
                message: "Contact not found"
            });
        }

        contact.name = name || contact.name;
        contact.phone = phone || contact.phone;
        contact.email = email || contact.email;
        contact.relationship = relationship || contact.relationship;
        contact.priority = priority || contact.priority;
        contact.canTrackLocation = canTrackLocation ?? contact.canTrackLocation;


        await contact.save();

        return res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            data:contact,
        });
        
        
    }catch(err){
        return res.status(500).json({

            success: false,
            message: err.message,

        })
    }

}
const deleteContacts = async(req,res) => {
    try{
        const contact = await trustedContact.findOne({
            _id : req.params.id,
            userId: req.user.id
        })

        if(!contact){
            return res.status(500).json({
                success: true,
                message: "Contact not found"
            })
        }

        const deleteContact = await trustedContact.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
            data: deleteContact
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = {addContacts,getContacts,updateContacts,deleteContacts}