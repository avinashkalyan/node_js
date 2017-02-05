const fs=require('fs');

var jsonData=[];
try{
  jsonData=JSON.parse(fs.readFileSync('notes1.txt'));
}catch(e){
  console.log("error "+e);
}
console.log("current data ",jsonData);
console.log("current length ",jsonData.length);
jsonData.push({title:"title",body:"body"});
//fs.appendFileSync('notes.txt',JSON.stringify(jsonData));
fs.writeFileSync('notes1.txt',JSON.stringify(jsonData));
console.log("inserted one more");
console.log("----------------------------------------");

const os=require('os');
console.log(`hostname is ${os.hostname()}`);
console.log(`homedir is ${os.homedir()}`);
console.log(`username is ${os.userInfo().username}`);
console.log(`homedir is ${os.userInfo().homedir}`);
console.log("----------------------------------------");

console.log("lodash is a thirdparty module so first installed using npm install lodash --save..here save used so package.json created and hold that dependency and its version")
const lodash=require('lodash');
console.log(lodash.lowerCase("HelloWorld"));
console.log(lodash.toLower("HelloWorld"));
console.log(lodash.sum([1,2,3,4,5]));
console.log("----------------------------------------");

var myFuns=require('./myfuns.js');
console.log(myFuns.sum1(1,2));
console.log(myFuns.subtract(1,2));
console.log(myFuns.funname);
console.log(myFuns.multiply(1,2));
console.log("----------------------------------------");

console.log("call like this from command prompt ... node require_test.js 1 2");
var arg1=lodash.toNumber(process.argv[2]);
var arg2=lodash.toNumber(process.argv[3]);
console.log(process.argv);
console.log(myFuns.sum1(arg1,arg2));
console.log("----------------------------------------");

console.log("yargs is a thirdparty module so first installed using npm install yargs --save..here save used so package.json created and hold that dependency and its version")
const yargs=require('yargs');
console.log(yargs.argv);
console.log("call like this from command prompt ... node require_test.js 1 2");
var arg1=lodash.toNumber(yargs.argv._[0]);
var arg2=lodash.toNumber(yargs.argv._[1]);
console.log(myFuns.sum1(arg1,arg2));
console.log("call like this from command prompt ... node require_test.js 1 2 --title='hi'");
console.log(yargs.argv.title);
