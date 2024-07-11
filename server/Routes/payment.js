const express = require("express");
const stripePay = require("../controllers/paymentController");

const paymRoute = express.Router();

paymRoute.post("/create-checkout-session",stripePay)
   
module.exports = paymRoute;      

