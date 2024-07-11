const message = require("../model/contactModel");


const contact = async (req,res)=>{
try {
    const response = req.body;
   

    const userMess = await message.create(response)

    res.status(200).send({mag:"created sucessfully",userMess})
} catch (error) {
    console.log(error,"error in message controller");
}
}


module.exports = contact

