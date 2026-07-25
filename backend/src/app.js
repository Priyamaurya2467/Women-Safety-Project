const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes')
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
module.exports = app;