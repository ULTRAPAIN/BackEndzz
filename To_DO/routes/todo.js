const express =require('express');

const router=express.Router();
//import controller

const {createTodo}=require('../controllers/createTodo');
const {deleteTodo}=require('../controllers/DeleteTodo');
const {getTodo,getTodoById}=require('../controllers/GetTodo');
const {updateTodo}=require('../controllers/updateTodo');
//define Api routes

console.log({ createTodo, deleteTodo, getTodo, updateTodo });


router.post('/createTodo',createTodo);
router.delete('/deleteTodo/:id',deleteTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo)

module.exports=router;