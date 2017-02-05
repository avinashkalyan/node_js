const request=require('request');
const axios=require('axios');

var getLatLng=(address,callback)=>{
  var encodedStr=encodeURIComponent(address);
  request.get({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedStr}`,json:true},
              function(error,response,body){
                if(error){
                  callback(error);
                } else {
                  //console.log("body..."+body);
                  callback(undefined,body);
                  //console.log("lat with plain request approach..."+body.results[0].geometry.location.lat);
                  //console.log("lng with plain request approach..."+body.results[0].geometry.location.lng);
                  //console.log(JSON.stringify(response.results.geometry.location.lat,undefined,2));
                }
              }
            )
}

var getLatLngUsingPromise=(address)=>{
    var promiseObj=new Promise((resolve,reject)=>{
      var encodedAddress=encodeURIComponent(address);
      request.get({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,json:true},
                  function(error,response,body){
                    if(error){
                      reject(error);
                    } else {
                      resolve(response);
                    }
                  }
      )
    })
    return promiseObj;
}

var getLatLngUsingAxios=(address)=>{
  var encodedAdd=encodeURIComponent(address);
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`);
}

module.exports={
  getLatLng,
  getLatLngUsingPromise,
  getLatLngUsingAxios
}
