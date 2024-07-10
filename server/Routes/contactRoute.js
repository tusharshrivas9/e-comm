const express = require("express");
const contact = require("../controllers/messageController");

const messroute = express.Router();


messroute.post("/contact",contact);   


module.exports = messroute