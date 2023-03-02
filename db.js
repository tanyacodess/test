require('dotenv').config()
const mongoose = require("mongoose");

const mongoDBURL = process.env.DBURL

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})
var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose