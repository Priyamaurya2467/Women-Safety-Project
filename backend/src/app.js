const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())
const path = require('path')

app.use('/uploads', express.static(path.join(__dirname,'uploads')))
const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const trustedContactRoutes = require('./routes/trustedContactRoutes')
const sosRoutes = require('./routes/sosRoutes')
const locationRoutes = require('./routes/liveLocationRoutes')
const cabverificationRoutes = require('./routes/cabRoutes')
const evidenceRoutes = require('./routes/evidenceRoutes')
const reportRoutes = require('./routes/communityRoutes')
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/contacts",trustedContactRoutes)
app.use("/api/sos" , sosRoutes);
app.use("/api/location",locationRoutes)
app.use("/api/cab" , cabverificationRoutes)
app.use("/api/evidence", evidenceRoutes)
app.use('/api/report', reportRoutes)


module.exports = app;