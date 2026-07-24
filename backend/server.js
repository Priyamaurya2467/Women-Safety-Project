const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Server is running successfully");
});

const port = process.env.PORT || 5000;

app.listen(port,() => {

    console.log(`Server is running on https://localhost:${port}`);

});

