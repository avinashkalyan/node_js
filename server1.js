var express=require('express');
var app=express();
//register a http get handler
app.get("/",(req,res)=>{
  res.send("Hello");
})
app.get("/users",(req,res)=>{
  res.status(200).send([
    {name:'avinash',age:40},
    {name:'kalyan',age:41},
    {name:'rao',age:42}
  ])
})

app.listen(9000);

module.exports.app=app;
