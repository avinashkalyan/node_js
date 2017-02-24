const fs=require('fs');//used const instead of var as this won't be changed again
var sum=function(arg1,arg2){
  return arg1+arg2;
}

var sumSync=function(arg1,arg2,callback){
  setTimeout(()=>{
    callback(arg1+arg2);
  },1000);
}

var subtract=(arg1,arg2)=> arg1-arg2;//when only 1 line do this way.

var subtractSync=(arg1,arg2,callback)=>{
  setTimeout(()=>{
    callback(arg1-arg2)
  },1500);
}

//arrow functions
var multiply=(arg1,arg2)=>{
  return arg1*arg2;
}

var funname="myfun";//property exported

var fetchNotes=()=>{
  var data=[];
  try{
    return JSON.parse(fs.readFileSync('notes1.txt'));
  }catch(e){
    data=null;
    console.log(`error is ${e}`);
  }
  return data;
}

var addANote=(titleArg,bodyArg)=>{
  var note={title:titleArg,body:bodyArg};
  var data=fetchNotes();
  var alreadyExists=[];
  if(data){
    alreadyExists=data.filter((note)=>{
      return note.title===titleArg;//if this is true then only goes to array
    })
  } else {
    data=[];
  }
  //we are stopping if title is already in file..so our file will have only unique titles
  if(alreadyExists.length==0){
    data.push(note);
    fs.writeFileSync('notes1.txt',JSON.stringify(data));
    console.log("added a note");
  } else {
    console.log("this title alreadyExists");
  }
}

var removeNote=(title)=>{
  var data=fetchNotes();
  var afterRemoving=data.filter((note)=>{
    return note.title!==title;
  })
  if(data.length===afterRemoving.length){
    console.log("note not found");
  } else {
    fs.writeFileSync('notes1.txt',JSON.stringify(afterRemoving));
    console.log("removed a note");
  }
}

var getNote=(title)=>{
  var data=fetchNotes();
  var getOnlyThisNote=data.filter((note)=>{
    return note.title===title;
  })
  if(getOnlyThisNote.length>0){
    console.log("in getNote "+getOnlyThisNote[0]);
  } else {
    console.log("note not found");
  }
  return getOnlyThisNote[0];
}

var logNote=(note)=>{
  console.log(`title is ${note.title} and body is ${note.body}`);
}

//this calls our mentioned function after 2 secs..so caller works like async mode
var getNoteAsync=(title,callback)=>{
  setTimeout(()=>{
      var data=fetchNotes();
      var getOnlyThisNote=data.filter((note)=>{
        return note.title===title;
      })
      if(getOnlyThisNote.length>0){
        console.log("in getNote "+getOnlyThisNote[0]);
      } else {
        console.log("note not found");
      }
      callback(getOnlyThisNote[0]);
    },
    2000);
}

module.exports={
  sum1:sum,//here outsider should call with sum1 as name
  subtract,//here we are allowing outsider to call with same name so no need to mention subtract:subtract
  funname,
  multiply,
  fetchNotes,
  addANote,
  removeNote,
  getNote,
  getNoteAsync,
  logNote,
  sumSync,
  subtractSync
};
