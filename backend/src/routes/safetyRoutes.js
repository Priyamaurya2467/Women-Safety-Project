const express = require("express");

const {

getSafetyScore

}=require("../controllers/safetyController");

const router=express.Router();

router.get("/",getSafetyScore);

module.exports=router;