const Notification = require("../models/Notifications");

// Create Notification
const createNotification = async (req, res) => {
    try {

        const {
            receiverId,
            senderId,
            type,
            title,
            message,
            data
        } = req.body;

        const notification = await Notification.create({
            receiverId,
            senderId,
            type,
            title,
            message,
            data,
            isRead: false,
            createdAt: new Date()
        });

        return res.status(201).json({
            success: true,
            message: "Notification created successfully",
            data: notification
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Get All Notifications
const getNotifications = async (req, res) => {

    try {

        const notifications = await Notification.find({
            receiverId: req.user.id
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: notifications
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Notification By ID
const getNotificationById = async (req, res) => {

    try {

        const notification = await Notification.findOne({
            _id: req.params.id,
            receiverId: req.user.id
        });

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: notification
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Update Notification
const updateNotification = async (req, res) => {

    try {

        const {
            title,
            message,
            type,
            data
        } = req.body;

        const notification = await Notification.findOne({
            _id: req.params.id,
            receiverId: req.user.id
        });

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        notification.title = title || notification.title;
        notification.message = message || notification.message;
        notification.type = type || notification.type;
        notification.data = data || notification.data;

        await notification.save();

        return res.status(200).json({
            success: true,
            message: "Notification updated successfully",
            data: notification
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Mark As Read
const markAsRead = async (req, res) => {

    try {

        const notification = await Notification.findOne({
            _id: req.params.id,
            receiverId: req.user.id
        });

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        notification.isRead = true;

        await notification.save();

        return res.status(200).json({
            success: true,
            message: "Notification marked as read",
            data: notification
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete Notification
const deleteNotification = async (req, res) => {

    try {

        const notification = await Notification.findOneAndDelete({
            _id: req.params.id,
            receiverId: req.user.id
        });

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Notification deleted successfully"
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    markAsRead,
    deleteNotification
};