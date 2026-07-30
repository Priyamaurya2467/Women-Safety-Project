const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())
const path = require('path')

app.use('/uploads', express.static(path.join(__dirname,'uploads')))
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const trustedContactRoutes = require('./routes/trustedContactRoutes')
const sosRoutes = require('./routes/sosRoutes')
const othlocationRoutes = require('./routes/liveLocationRoutes')
const cabverificationRoutes = require('./routes/cabRoutes')
const evidenceRoutes = require('./routes/evidenceRoutes')
const reportRoutes = require('./routes/communityRoutes')
const notificationRoutes = require('./routes/notificationRoutes')
const aichatRoutes = require('./routes/aichatRoutes')
const emergencyRoute = require('./routes/emergencyRoutes')
const emergencyNumberRouter = require('./routes/emergencyNumber')
const locationRoutes = require('./routes/locationRoutes')
const journeyRoutes = require('../src/routes/journeyRoutes')
const safetyRoutes = require('../src/routes/safetyRoutes')
const monitoringRoutes = require("../src/routes/monitoringRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/contacts",trustedContactRoutes)
app.use("/api/sos" , sosRoutes);
app.use("/api/location",othlocationRoutes)
app.use("/api/cab" , cabverificationRoutes)
app.use("/api/evidence", evidenceRoutes)
app.use('/api/report', reportRoutes)
app.use('/api/notifications', notificationRoutes)
app.use('/api/ai',aichatRoutes)
app.use('/api/emergency',emergencyRoute)
app.use('/api',emergencyNumberRouter)
app.use('/api/location',locationRoutes)
app.use("/api/journey",journeyRoutes);
app.use("/api/safety", safetyRoutes);
app.use('/api/monitor',monitoringRoutes)


module.exports = app;