const express =require("express")
const dbconnect=require("./config/database")
const app = express()

require("dotenv").config()

const PORT=process.env.PORT || 4000

app.use(express.json())

dbconnect()

//route Import and amount 
const route=require("./Routes/route")
app.use("/api/v1",route)

//activate

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`)
})