const JWT = require('jsonwebtoken')
const ErrorHander = require('../utils/ErrorHander')
const asyncErrors = require('../middleware/asyncErrors')
const User = require('../models/userModel');

exports.isAuthenticatedUser = asyncErrors( async(req,res,next)=>{
      const {token }= req.cookies;
      if(!token){
          return next( new ErrorHander('Please login to access this resource',401))
      }
     const  decodedData =  JWT.verify(token , process.env.JWT_SECRET)
     req.user = await User.findById(decodedData.id)
     next();
   
})

