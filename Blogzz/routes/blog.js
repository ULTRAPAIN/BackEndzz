const express=require("express")
const router =express.Router()

//importing the controller
const {dummyLink}=require("../controllers/Likecontroller")
const {createComment}=require("../controllers/Commentcontroller")
const {createPost}=require("../controllers/Postcontroller")
const {getAllPosts}=require("../controllers/Postcontroller")
const {likePost,unlikePost}=require("../controllers/Likecontroller")


//mapping with the routes path with the controller functions
router.get("/dummyroute",dummyLink)
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("likes/unlike",unlikePost)

//exporting the router
module.exports=router