const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

const {
    uploadEvidence,
    getEvidence,
    getEvidenceById,
    deleteEvidence
} = require("../controllers/evidenceController");

router.post(
    "/upload",
    authMiddleware,
    upload.array("files",10),
    uploadEvidence
);

router.get("/", authMiddleware, getEvidence);

router.get("/:id", authMiddleware, getEvidenceById);

router.delete("/:id", authMiddleware, deleteEvidence);

module.exports = router;