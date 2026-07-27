const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    markAsRead,
    deleteNotification
} = require("../controllers/notificationController");

router.post("/", authMiddleware, createNotification);

router.get("/", authMiddleware, getNotifications);

router.get("/:id", authMiddleware, getNotificationById);

router.put("/:id", authMiddleware, updateNotification);

router.put("/:id/read", authMiddleware, markAsRead);

router.delete("/:id", authMiddleware, deleteNotification);

module.exports = router;