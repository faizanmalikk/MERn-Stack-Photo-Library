const ErrorHander = require('../utils/ErrorHander')
const asyncErrors = require('../middleware/asyncErrors')
const User = require('../models/userModel')
const sendToken = require('../utils/JwtToken')

//Creating a User
exports.createUser = asyncErrors(async(req,res,next)=>{

    const{name , image , googleId} = req.body

    const users = await User.findOne({ googleId })
    if (users) {
        sendToken(users, 200, res)
    }else{

        const user = await User.create({
            name,
            image,
            googleId
         })
         sendToken(user, 201, res)
    }

})

//Get user details

exports.getLoggedInUserDetails = asyncErrors( async(req,res,next)=>{
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success : true,
        user
    })
})

//Get any user Details
exports.getAnyUserDeatils = asyncErrors( async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    res.status(200).json({
        success : true,
        user
    })
})

//Logout User

exports.logoutUser = asyncErrors(async (req, res, next) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite : 'none',
        secure : true
    })



            

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})