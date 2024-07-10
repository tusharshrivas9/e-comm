const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken")


const authLogin = async (req,res,next)=>{
    try {
        const decode =await jwt.verify(req.headers.authorization,process.env.KEY);

        req.user = decode

        next() 
    } catch (error) {
        console.log(error,"error in userAuth");
         res.status(400).json({msg:"you are not the admin"})
    }
 
}

const Admin =  async(req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)

        if (user.role!==0) {
            return res.status(400).send({msg:"you are not the admin"})
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error,"admin error");
    }
}


module.exports = {authLogin,Admin}