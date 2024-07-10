const express = require("express");
const kurti = require("../Products/kurti");
const kurti1 = require("../Products/kurti1");
const dupatta = require("../Products/dupatta");
const bags = require("../Products/bags");

const productRoute = express.Router()

productRoute.post("/kurti",(req,res)=>{
    res.send(kurti)
})

productRoute.post("/kurti1",(req,res)=>{
    res.send(kurti1)
})

productRoute.post("/dupatta",(req,res)=>{
    res.send(dupatta)
})

productRoute.post("/bags",(req,res)=>{
    res.send(bags)
})

module.exports = productRoute