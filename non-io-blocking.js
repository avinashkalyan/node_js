const myfun=require("./myfuns.js");

//var note=myfun.getNote('title1');
//console.log("note="+note);
//var note1=myfun.getNote('title2');
//console.log("note1="+note1);

//var sum=1+2;
//console.log("sum="+sum);
//setTimeout(function(){console.log("callback function..")},2000);

//var mycallback=()=>{console.log("callback here")};
//setTimeout(mycallback,1000);

var altFun = function(note){
  console.log(note.title);
}

myfun.getNoteAsync('my title2',altFun);
myfun.getNoteAsync('my title2',altFun);

var fs=require('fs');
var data = fs.readFileSync('notes1.txt');
console.log("sync.."+data);

var callback = function (err, data) {
  if (err) return console.error(err);
  console.log("async.."+data);
};
fs.readFile('notes1.txt', callback);

sum=1+2;
console.log("sum="+sum);
