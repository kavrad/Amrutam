//require express
const express=require("express");

//require the dotenv library to be able to use the environment variables in this file
require("dotenv").config();

//connection to db
const dbConnect=require("./config/database");

//define port
const port=process.env.PORT || 4000

//instantiate the server
const app=express();

//connection to db
dbConnect();

//listening the app on a particular port
app.listen(port,(err)=>{
   if(err){
    throw err;
   }
   console.log("Server running sucessfully on port",port);
})


