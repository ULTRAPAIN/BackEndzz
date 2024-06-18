// lets first create the Server
const express = require('express');
const app= express();

//load config from env file 
require('dotenv').config(); 
const PORT = process.env.PORT ||  4000;

// since we parse the request body in the createTodo controller, we need to use the express.json() middleware to parse the request body.
app.use(express.json());

// importing the routes for mapping the routes to the server
const todoRoutes = require('./routes/todo');
// mount the routes
app.use('/api/v1',todoRoutes);

//start the server

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect to the database

const dbconnect=require('./config/database');
dbconnect();

//default route
app.get('/',(req,res)=>{
    res.send(`<h1>Jai Siya Ram </h1>`)
})