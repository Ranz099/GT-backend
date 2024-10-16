const mongoose = require("mongoose");

const connectDB = ()=>{
    // console.log(process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URI)
        .then((data)=>{
            console.log(`mongoDB connected with server`);
        })
        .catch((e)=>{
            console.log(e);
        })
}


module.exports = connectDB;
