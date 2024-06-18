// first we will retrieve the schema object created 
const Todo = require("../models/todo")
// then we will create a new controller for deleting the todo
exports.deleteTodo=async (req,res)=>{
    try{
        // first we will extract the id from the request parameters
        const id=req.params.id;
        // then we will find the todo by id and delete it
        const response =await Todo.findByIdAndDelete({_id:id});
        //send the Response back to the Client 
        res.status(200).json({
            success:true,
            data:response,
            Message:"Todo deleted successfully"
        })
    }
    catch(error){
        console.log("Error while deleting the todo");
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            Message:"Server Error"
        })
    }
}
