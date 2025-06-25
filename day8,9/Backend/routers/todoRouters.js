const express=require('express')
const todoRouter=express.Router()
 const {getTodo,postTodo,putTodo,deleteTodo,getTodoById}=require('../controllers/todoControllers.js');
todoRouter.get('/get',getTodo)
todoRouter.get('/get/:id',getTodoById)
todoRouter.post('/post',postTodo)
todoRouter.put('/put/:id',putTodo)
todoRouter.delete('/delete/:id',deleteTodo)

module.exports=todoRouter;