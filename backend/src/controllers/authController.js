const { data } = require("react-router-dom");
const User = require("../models/User")
const jwt = require('jsonwebtoken')

const register = async (req,res) =>{
    try{
        const {
            fullName,email,phone,password,profileImage,gender,dob,bloodGroup,address,medicalConditions,allergies,role,firebaseUID,isVerfied,isOnline,createdAt,updatedAt
        } = req.body;

        const existingEmail = await User.findOne({email});

        if(existingEmail){
            return res.status(400).json({
                success:false,
                message:"Email already exists",
            });
        }

        const existingPhone = await User.findOne({phone});

        if(existingPhone){
            return res.status(400).json({
                success: false,
                message: "Phone number already exists"
            });
        }

        const user = await User.create({
            fullName,email,phone,password,profileImage,gender,dob,bloodGroup,address,medicalConditions,allergies,role,firebaseUID,isVerified:false,isOnline:false
        })

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data:user,
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async(req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        
        if(user.password != password){
            return res.status(400).json({
                success: false,
                message: "Invalid Password",
            })
        }
        const token = jwt.sign({
            id:user._id,
            email: user.email,
            role: user.role,
        },process.env.JWT_SECRET)

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
   
}

module.exports = {register,login}