const { data } = require('react-router-dom');
const Evidence = require('../models/Evidence')

const uploadEvidence = async(req,res) => {

    try{
        const {sosId , fileType} = req.body;
        const evidence = await Evidence.create({
            sosId,
            uploadedBy: req.user.id,
            fileType,
            fileUrl: req.file.path,

        });

        return res.status(201).json({
            success: true,
            message: "Evidenc uploaded successfully",
            data: evidence
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getEvidence = async (req, res) => {

    try {

        const evidence = await Evidence.find({
            uploadedBy: req.user.id
        });

        res.status(200).json({
            success: true,
            data: evidence
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
const getEvidenceById = async (req, res) => {

    try {

        const evidence = await Evidence.findOne({
            _id: req.params.id,
            uploadedBy: req.user.id
        });

        if (!evidence) {
            return res.status(404).json({
                success: false,
                message: "Evidence not found"
            });
        }

        res.status(200).json({
            success: true,
            data: evidence
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const deleteEvidence = async (req, res) => {

    try {

        const evidence = await Evidence.findOneAndDelete({
            _id: req.params.id,
            uploadedBy: req.user.id
        });

        if (!evidence) {
            return res.status(404).json({
                success: false,
                message: "Evidence not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Evidence deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {uploadEvidence,getEvidence,getEvidenceById,deleteEvidence}