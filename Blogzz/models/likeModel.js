//Importing the mongoose module
const mongoose=require("mongoose")

//creating the schema for the like 

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //This is storing the id of the post
        ref:"Post" //This is the reference to the post model
    },
    user:{
        type:String,
        required:true,
    }
})

//export the model
module.exports=mongoose.model("Like",likeSchema)