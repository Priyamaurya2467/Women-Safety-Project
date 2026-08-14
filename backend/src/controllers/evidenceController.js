const Evidence = require("../models/Evidence");

const uploadEvidence = async (req, res) => {
  try {
    const { sosId } = req.body;

    // upload.array() gives req.files
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const evidenceData = req.files.map((file) => ({
      sosId: sosId || null,
      userId: req.user.id,
      fileName: file.originalname,
      fileType: file.mimetype,
      fileUrl: file.path,
      fileSize: file.size
    }));

    const evidence = await Evidence.insertMany(evidenceData);

    return res.status(201).json({
      success: true,
      message: "Evidence uploaded successfully",
      data: evidence,
    });

  } catch (error) {
    console.error("Upload Evidence Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: evidence,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const getEvidenceById = async (req, res) => {
  try {
    const evidence = await Evidence.findOne({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    if (!evidence) {
      return res.status(404).json({
        success: false,
        message: "Evidence not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: evidence,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const deleteEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.findOneAndDelete({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    if (!evidence) {
      return res.status(404).json({
        success: false,
        message: "Evidence not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Evidence deleted successfully",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


module.exports = {
  uploadEvidence,
  getEvidence,
  getEvidenceById,
  deleteEvidence,
};