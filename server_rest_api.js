const express=require('express');
const bodyParser=require('body-parser');

const {mongoose}=require('./mongoose-db.js');//this way of getting property is es6 object destructing method
const {Todo}=require('./Todo.js');

var app=new express();
app.use(bodyParser.json());//using middleware we are telling to recive inputs as json

//insert a todo - api for this functionality
app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });//from client we get as {text:'some text'}..so we are preparing todo from this value

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})

app.listen(process.env.PORT || 3000);
