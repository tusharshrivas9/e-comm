const express = require("express");

const dotenv = require("dotenv");

dotenv.config()

const app = express();


const port = process.env.PORT || 3455; 

// routes

const userRoute = require("./Routes/userRoute")

// products 
const productRoute = require("./Routes/productRoute");

const contactRoutes = require("./Routes/contactRoute")


const cors = require("cors");
const paymRoute = require("./Routes/payment");
const cloudiRoutes = require("./Routes/cloudiroutes");


require("./db/connection"); 

app.use(express.json({limit:"50mb"}))

app.use(cors())

app.use(userRoute);

app.use(productRoute);

app.use(contactRoutes);

app.use(paymRoute);

app.use(cloudiRoutes);

app.listen(port,()=>{
    console.log(`connected to port no ${port}`);    
})