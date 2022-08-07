const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')

const userSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    },
    googleId:{
        type : String,
        required : true
    },
   

})

//JWT Token
userSchema.methods.getJwtToken = function(){
    return JWT.sign({id : this._id},process.env.JWT_SECRET,{
        expiresIn : Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    })
}

module.exports = mongoose.model('User',userSchema)