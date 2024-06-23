const express= require("express")
const app = express()
require("dotenv").config()
const PORT=process.env.PORT || 3000
const dbconnect=require("./config/database")
const blog=require("./routes/blog")

//We are using the express Json as a middleware to parse the incoming request body
app.use(express.json())

//mounting the blog route
app.use("/api/v1",blog)

//creating the default Route
app.get("/",(req,res)=>{
    res.send("Welcome to the Blogzz Home Page")
})

//connecting to the database
dbconnect();

//App running
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})