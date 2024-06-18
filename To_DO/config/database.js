// we will use mongoose to connect to the database 

const { default: mongoose } = require("mongoose")

require('dotenv').config()

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{console.log('Connected to the database')})
    .catch((err)=>{console.log('Error in connecting to the database')
        console.error(err.message)
        process.exit(1)
    })

}

module.exports=dbconnect