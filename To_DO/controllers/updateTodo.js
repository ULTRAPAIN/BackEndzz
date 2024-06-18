const Todo=require("../models/todo")

exports.updateTodo=async (req,res)=>{
    try{
        const id=req.params.id;
        const {title,description}=req.body;
        const response =await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()},{new:true});
        res.status(200).json({
            success:true,
            data:response,
            Message:"Todo updated successfully"
        })
    }
    catch(error){
        console.log("Error while updating the todo");
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            Message:"Server Error"
        })
    }
}