const Post =require("../models/postModel")

exports.createPost=async(req,res)=>{
    try{
            // first we will fetch the data from the body 
            const {title,body}=req.body
            const post= new Post({
                title,
                body,
            })
            //Now we will save the created Object to the database
            const savedPost= await post.save()
            res.status(200).json({
                post:savedPost
            })
        }
    catch(error){
        res.status(400).json({
            error:"Error while creating the Post "
        })
    }
}

exports.getAllPosts=async(req,res)=>
    {
        try{
                const posts=await Post.find().populate("likes").populate("comments").exec()
                res.status(200).json({
                    posts,
                })
        }
        catch(error){
            res.json({
                error:"Error while fetching the Posts"
            })
            
        }
    }
