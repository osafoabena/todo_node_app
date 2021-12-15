const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const server = express();
const mongo_db_url = 'mongodb+srv://ms_naa:sprinkles93@cluster0.vegxf.mongodb.net/todos_db?retryWrites=true&w=majority'




server.get('/todos', todoController.getAllTodos);
server.post('/todos',todoController.insertTodo);
server.put('/todos',  todoController.updateTodoById);
server.delete('/todos', todoController.deleteTodoById);

server.listen(4000, function(){
    console.log('Server has started to run in express');
    mongoose.connect(mongo_db_url)
    .then(function(){
        console.log('DB is connected');
    })
    
    .catch(function(error){
        console.log('DB is not connected:',error.message);

    });
});