//importing teh mongoose mdoule
const mongoose = require('mongoose');
const  Like  = require('./likeModel');
const Comment=require('./commentModel');

//creating the schema for the post
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:100,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})



//exporting the model 
module.exports=mongoose.model("Post",postSchema)