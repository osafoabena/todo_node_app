require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 4000;
const server = express();
 //const mongo_db_url ='';
//const mongodb_db_url="";

server.use(express.json());


server.listen(4000, function(){
    console.log('Server has started to run in express');
    mongoose.connect(process.env.ATLAS_URL)
    .then(function(){
        console.log('DB is connected');
        server.get('/', function (request, response){
            response.status(200).json({success: true, message: 'WELCOME,this is AB todo node API'})},)
        server.get('/todos', todoController.getAllTodos);
        server.get('/todos/:id', todoController.getTodoById);
        server.post('/todos',todoController.insertTodo);
        server.put('/todos/:id',  todoController.updateTodoById);
        server.delete('/todos/:id', todoController.deleteTodoById);

    })
    
    .catch(function(error){
        console.log('DB is not connected:',error.message);

    });
});