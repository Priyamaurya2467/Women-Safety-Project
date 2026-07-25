const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const trustedContactRoutes = require('./routes/trustedContactRoutes')
const sosRoutes = require('./routes/sosRoutes')
const locationRoutes = require('./routes/liveLocationRoutes')
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/contacts",trustedContactRoutes)
app.use("/api/sos" , sosRoutes);
app.use("/api/location",locationRoutes)
module.exports = app;