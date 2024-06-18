
// Now we will import the schema from models/todo.js and create a new todo using the schema.   

const Todo = require('../models/todo');

// now we will create the routes handler for the createTodo route.
 
exports.createTodo=async(req,res)=>{
    try{
        // extracting title and description from the request body
        const {title,description}=req.body;
        //create a new Tod do object using the Todo schema 
        const response = await Todo.create({
            title,description
        })
        //send the response back to the client
        res.status(200).json({
            success:true,
            data:response,
            Message:"Todo created successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log("Error while creating a new todo");
        res.status(500).json({
            success:false,
            error:error.message,
            Message:"Server Error"
        })
    }
}