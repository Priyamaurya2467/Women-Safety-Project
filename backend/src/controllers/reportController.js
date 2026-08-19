const { default: mongoose } = require('mongoose')
const reportModel = require('../models/CommunityReport')


const createIncident = async(req,res) => {
    try{

    
        const {reportedBy,category,title,description,latitude,longitude,images,severity,anonymous,status,verifiedBy,createdAt}=req.body


        const report = await reportModel.create({
            reportedBy: req.user.id,
            category,title,description,latitude,longitude,images,severity,anonymous,status,verifiedBy,createdAt: Date.now()
        })

        return res.status(201).json({
            success: true,
            message: "Report created Successfully",
            data: report
        })
    }catch(err){
        return res.status(501).json({
            success: false,
            message: err.message
        })
    }
}
const getIncident = async (req,res) => {
    try{

        const report = await reportModel.find({
        reportedBy: req.user.id
         }).sort({createdAt: -1})

        return res.status(200).json({
         success: true,
         message: "Report fetched Successfully",
         data: report
        })

    }catch(err){
        return res.status(501).json({
            success: false,
            message: err.message
        })
    }
    

}

const getIncidentById = async(req,res) => {
    
    try{

            const reports = await reportModel.findOne({
            _id: req.params.id,
            reportedBy: req.user.id     
            }).sort({createdAt: -1})

          return res.status(200).json({
            success: true,
            message: "Data fetched",
            data: reports
    })

    }catch(err){
        return res.status(501).json({
            success: false,
            message: err.message
        })
    }
    
}
const putIncidentByid = async(req,res) => {
    try{
        const {reportedBy,category,title,description,latitude,longitude,images,severity,anonymous,status,verifiedBy,createdAt}=req.body

    const report = await reportModel.findOne({
        _id: req.params.id,
        reportedBy: req.user.id
    })
    if(!report){
        return res.status(501).json({
            success: false,
            message: "Report not found"
        })
    }

    report.reportedBy = reportedBy || report.reportedBy,
    report.category = category || report.category
    report.title = title || report.title
    report.description=description || report.description
    report.latitude = latitude || report.latitude
    report.longitude = longitude || report.longitude
    report.images = images || report.images
    report.severity = severity || report.severity
    report.anonymous = anonymous || report.anonymous
    report.status = status || report.status
    report.verifiedBy = verifiedBy || report.verifiedBy
    report.createdAt = createdAt || report.createdAt

    await report.save()
    return res.status(201).json({
        success: true,
        message: "Reports updated",
        data: report
    })

    }catch(err){
        return res.status(501).json({
            success: false,
            message: err.message
        })
    }
    

}
const deleteById = async(req,res) => {
    try{

        const deleteReport = await reportModel.findOneAndDelete({
        _id: req.params.id,
            reportedBy: req.user.id
        })

        return res.status(201).json({
            success: true,
            message: "Report deleted Successfully",
            data: deleteReport
        })

    }catch(err){
        return res.status(501).json({
            success: false,
            message: err.message
        })
    }
    
}
module.exports = {createIncident,getIncident,getIncidentById,putIncidentByid,deleteById}