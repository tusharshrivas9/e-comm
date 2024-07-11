const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true     
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type: Boolean,
        default:false

    }
},{timestamp:true})


// token generate

userSchema.methods.generatetoken = async function () {
    try {
       const userToken =  await jwt.sign(
        {_id:this._id,
        role:this.role,
        name:this.name
        }
        ,process.env.KEY);
       
       return userToken
    } catch (error) {
       console.log(error,"jwt error"); 
    }
}

const user = mongoose.model("User",userSchema)

module.exports = user;