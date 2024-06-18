const Todo=require("../models/todo")

exports.getTodo=async(req,res)=>{
    try{
        const response=await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            Message:"Successfully Fetched all the Todo's"
        })
}
catch(error){
    console.log("Error while getting the todo");
    console.error(error);
    res.status(500).json({
        success:false,
        error:error.message,
        Message:"Server Error"
    })
}
}

exports.getTodoById=async(req,res)=>{
    try{
        // extract To do item based on Id 
        const id=req.params.id
        const response=await Todo.findById({_id:id})
        if(!response){
            //data for given Id not found 
            return res.status(404).json({
                success:false,
                message:"No Data Found for the given Id"
            })
          
        }

        res.status(200).json({
            success:true,
            data:response,
            Message:"Successfully Fetched the Todo"
        }) 
    }
    catch(error){
        console.log("Error while getting the todo");
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            Message:"Server Error"  
    })
}
}