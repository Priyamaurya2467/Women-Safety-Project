const dotenv = require("dotenv")
const app = require("./src/app");
const connecDb = require("./src/config/db")
const cors = require('cors')

require('dotenv').config();
connecDb();

app.use(cors())

console.log("gemini api",process.env.GROQ_API_KEY)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})