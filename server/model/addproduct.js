const mongoose = require("mongoose")

const addschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    photo:{
        type:Object,
        required:true
    },
},{
    timestamps:true
})

const addproduct = mongoose.model("addproduct",addschema)

module.exports = addproduct