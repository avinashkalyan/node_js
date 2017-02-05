const request=require('request');
const axios=require('axios');

var getTemp=(lat,lng,callback)=>{
  request.get({url:`https://api.darksky.net/forecast/f1e940e24fba39d191094124c07d08ef/${lat},${lng}`,json:true},(error,response,body)=>{
    if(error){
      //console.log(error);
      callback(error);
    } else {
      //console.log(response.body.currently.temperature);
      callback(undefined,body);
    }
  })
}

var getTempUsingPromise=(lat,lng)=>{
  var promiseObj=new Promise((resolve,reject)=>
    {
    request.get({url:`https://api.darksky.net/forecast/f1e940e24fba39d191094124c07d08ef/${lat},${lng}`,json:true},(error,response,body)=>{
      if(error){
        reject(error);
      } else {
        //console.log(response.body.currently.temperature);
        resolve(response);
      }
    })
  })
  return promiseObj;
}

var getTempUsingAxios=(lat,lng)=>{
  return axios.get(`https://api.darksky.net/forecast/f1e940e24fba39d191094124c07d08ef/${lat},${lng}`);
  //this returns promise object
}

module.exports={
  getTemp,
  getTempUsingPromise,
  getTempUsingAxios
}
