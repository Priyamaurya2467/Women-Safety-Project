const dotenv = require("dotenv")
const app = require("./src/app");
const connecDb = require("./src/config/db")
const cors = require('cors')

require('dotenv').config();
connecDb();
const FRONTEND_URL = 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

console.log("gemini api",process.env.GROQ_API_KEY)

const port = process.env.PORT || 5000;

app.listen(port,"0.0.0.0",()=>{
    console.log(`Server is running on port ${port}`)
})