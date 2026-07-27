const mongoose = require("mongoose");
require('dotenv').config()
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDb;