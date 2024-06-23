//importing the models

const Post =require("../models/postModel")

const Comment=require("../models/commentModel")


//Business logic 

exports.createComment=async(req,res)=>{
    try{
        //fetch data from the req Body
        const {post,user,body}=req.body;
        //create the commnet object
        const comment= new Comment({
            post,
            user,
            body,
        })
        // saving the comment in to the database
        const savedComment =await comment.save()
 
        //find the post by Id  and push the comment id in the comments array of the post
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{commnents:savedComment._id}},{new:true})
        .populate("comments")//populate the comments array of the post
        .exec()
        res.json({
            post:updatedPost
        })
    }
    catch(error){
        return res.status(500).json({
            errro:"error while creating the comment",
        })
    }
}