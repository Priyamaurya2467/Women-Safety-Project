const dotenv = require("dotenv")
const app = require("./src/app");
const connecDb = require("./src/config/db")

dotenv.config()
connecDb();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})