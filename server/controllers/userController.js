const user = require("../model/userModel");
const bcrypt = require("bcryptjs")


const register = async (req,res)=>{
   try {
      const {name ,email ,password, address,phone} =  req.body;

      if (!name  || !email  || !password || !address || !phone) {
         return res.status(400).send("all fields are required")
      }

      const userExist = await user.findOne({email});

      if (userExist) {
         return res.status(400).send("user already exist")   
      }

      const hashPass = await bcrypt.hash(password,10)

      const newUser = await user.create({name ,email ,password:hashPass, address,phone})

      res.status(200).send({mag:"created sucessfully",newUser})
   } catch (error) {
      console.log(error,"register");
   }
}

// login

const login = async (req,res)=>{
   try {
      const {email,password}  = req.body;
      if (!email,!password) {
         res.status(400).send({msg:"all fieldsare required"})
      }
      const userExist = await user.findOne({email})
      if (!userExist) {
         return res.status(400).send("user does not exist") 
      }
      const match = await bcrypt.compare(password,userExist.password)
      if (!match) {
         return res.status(400).json({msg:"user does not exist"})
      }

      const token = await userExist.generatetoken()

      res.status(200).json({msg:"user login sucessfully",token,userExist})
   } catch (error) {
      console.log(error,"error in login");
   }
}

module.exports = {register,login}