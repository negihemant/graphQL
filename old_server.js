const path = require('path')
const express = require('express')
const mongoose = require('mongoose'); 
const app = express()

const ToDo = require("./graphql/mongoose/todo")

mongoose.connect('mongodb://localhost:27017/local')
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})


app.get('/',function(req,res){
	res.send('data');
}) 

app.get('/quotes',(req,res)=>{
    // Insert into TodoList Collection
    var todoItem = new ToDo({
     itemId:1,
     item:req.body.item,
     completed: false
    })
   todoItem.save((err,result)=> {
     if (err) {console.log("---TodoItem save failed " + err)}
     console.log("+++TodoItem saved successfully "+todoItem.item)
   res.redirect('/')
    })
   })

var server = app.listen(8000, function () {
    console.log("app running on port.", server.address().port);
});