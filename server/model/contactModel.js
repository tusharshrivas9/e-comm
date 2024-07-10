const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})

const message = mongoose.model("message",contactSchema)

module.exports = message