//Importing the mongoose module
const mongoose =require("mongoose")

//creating the schema for the comment
const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //This is storing the id of the post
        ref:"Post",//This is the reference to the post model   
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})


//exporting the model 
module.exports=mongoose.model("Comment",commentSchema)