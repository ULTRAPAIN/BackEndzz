const express=require("express")
const router =express.Router()

//importing the controller
const {dummyLink}=require("../controllers/Likecontroller")




//mapping with the routes path with the controller functions
router.get("/dummyroute",dummyLink)


//exporting the router
module.exports=router