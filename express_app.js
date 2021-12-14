const express = require('express');
const mongoose = require('mongoose');

const server = express();
const mongo_db_url = 'mongodb+srv://ms_naa:sprinkles93@cluster0.vegxf.mongodb.net/todos_db?retryWrites=true&w=majority'




server.get('/todos', function(req, res){
   res.status(200).json('You have been given access to all todos');
});
server.post('/todos', function(req, res){
    res.status(200).json('A new todo has been created');
});
server.put('/todos', function(req, res){
    res.status(200).json('Todo updated');
});
server.delete('/todos', function(req, res){
    res.status(200).json('Todo has been deleted');
});

server.listen(4000, function(){
    console.log('Server has started to run in express');
});