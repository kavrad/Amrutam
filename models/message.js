//require mongoose
const mongoose=require("mongoose");

//define schema for message collection
const messageSchema=new mongoose.Schema({
    userMessage:{
        type:String,
        required:true
    },
    correctedMessage:{
        type:String
    },
    
})

//create the message model via mongoose
module.exports=mongoose.model("Message",messageSchema);