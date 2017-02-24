var express=require('express');
var hbs=require('hbs');
var fs=require('fs');
var app=express();
var port = process.env.PORT || 9000;
console.log(__dirname);

hbs.registerPartials(__dirname+"/views/partials");//this is for footer like templates..directory of that mentioned here

app.set('view engine','hbs');//this is for send.render as hbs files..without also worked

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('getInCaps',(text)=>{
  return text.toUpperCase();
});

app.use((req,res,next)=>{
  var data=new Date().toString()+" method:"+req.method+" path:"+req.path+"\n";
  fs.appendFile('logFile.txt',data);
  next();
});

/*app.use((req,res,next)=>{
  res.render("maintenance.hbs");
});*/

//if you use this middleware then we can access html directly like this..http://localhost:9000/help.html
app.use(express.static(__dirname+"/public"));

//register a http get handler
app.get("/",(req,res)=>{
  res.send("<h1>Hello World</h1>")
})

app.get("/about",(req,res)=>{
  res.send("About Page")
})

app.get("/someJson",(req,res)=>{
  //express automatically sends proper content-type in response..no need to mention
  res.send({pageName:"to show json demo",pageTitle:"json demo"})
})

app.get("/loginPage",(req,res)=>{
  res.render("login.hbs",{
    title:"login page",
    bodyData:"LOGIN PAGE shown"
  });
})

app.listen(port,()=>{
  //this callback function once server ready shows this message
  //if you run server.js on nodemon ..no need to restart automatically changes get reflected as nodeman keeps restarting
  console.log(`server started on the port ${port}`);
})

module.exports={
  app
}
