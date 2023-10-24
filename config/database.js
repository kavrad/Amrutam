//require mongoose
const mongoose=require("mongoose");

//require dotenv
require("dotenv").config(); 

//function to connect the server to the db via mongoose
const dbConnect=()=>{

    //method that establishes the connection to db
    mongoose.connect(process.env.DB_CONNECT,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Sucessfully connected to db");
    }).catch((err)=>{
       console.log("Error in connecting to db",err);
       process.exit(1);
       
    })
}

module.exports=dbConnect;