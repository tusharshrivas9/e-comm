const mongoose = require("mongoose");

mongoose.connect(process.env.DB)
.then(() => console.log('connected to database'))
.catch((err)=>{
    console.log(err,"fail to connect");
})


