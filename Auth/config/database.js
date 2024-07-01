const mongoose= require ("mongoose")
require("dotenv").config()

exports.connect=()=>{
    const dbUrl=process.env.MONGODB_URL;
    if(!dbUrl){
        console.error("Database Url is not Mentioned in the Environment Variables")
    }
    mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=>{
        console.log("DB Connected Successfully")
    })
    .catch((err)=>{
        console.log("DB connection Issues")
        console.error(err)
        process.exit(1)
    })
}