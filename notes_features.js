const fs=require('fs');
const yargs=require('yargs');
const myfun=require("./myfuns.js");
//with this we are making strict to command to pass titles for required commands..also alias titles provided..help feature added
//node notes_features.js --help
var titleVar={
  demand:true,
  description:'mention a title in note to notes1.txt',
  alias:'t'
};
var bodyVar={
  demand:true,
  description:'mention a body in note to notes1.txt',
  alias:'b'
};

const argv=yargs.command('add','adding a note',
  {
    title:titleVar,body:bodyVar
  }
).command('remove','removing a note',
  {
    title:titleVar
  }
).command('get','get a note',
  {
    title:titleVar
  }
).help().argv;
const commandProvided = argv._[0];
//run like this node notes_features.js add --title="my title" --body="my body"
//run like this node notes_features.js remove --title="my title"
//run like this node notes_features.js list
//run like this node notes_features.js get --title="my title"
if(commandProvided==="add"){
  myfun.addANote(yargs.argv.title,yargs.argv.body);
}
else if(commandProvided==="remove"){
  myfun.removeNote(yargs.argv.title);
}
else if(commandProvided==="list"){
  var data=myfun.fetchNotes();
  if(data){
    data.forEach((note)=>{
      myfun.logNote(note);
    })
  }
  if(data){
    console.log("-------");
    data.forEach(function(note){
      myfun.logNote(note);
    })
  }
}
else if(commandProvided==="get"){
  var note=myfun.getNote(yargs.argv.title);
  if(note){
    myfun.logNote(note);
  }
}
