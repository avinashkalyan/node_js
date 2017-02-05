const request=require('request');
const geocode=require('./geocode');
const weather=require('./weather.js');

var printLatLng=(error,response)=>{
  if(error){
    console.log("error with plain request approach.."+error);
  }else{
    console.log("lat with plain request approach..."+response.results[0].geometry.location.lat);
    console.log("lng with plain request approach..."+response.results[0].geometry.location.lng);
    weather.getTemp(response.results[0].geometry.location.lat,response.results[0].geometry.location.lng,printTemp);
  }
}

var printTemp=(error,response)=>{
  if(error){
    console.log("error with plain request approach.."+error);
  }else{
    console.log("temp with plain request approach..."+response.currently.temperature);
  }
}

geocode.getLatLng("phoenix",printLatLng);//this is the first call here..above 2 are callback functions to track response

geocode.getLatLngUsingAxios("phoenix").then((response)=>{//this is the second call here..
  console.log("lat with axios approach..."+response.data.results[0].geometry.location.lat);
  console.log("lng with axios approach..."+response.data.results[0].geometry.location.lng);
  //actually we can make here itself and have other then but not working so kept another function
  weatherSvcCall(response.data.results[0].geometry.location.lat,response.data.results[0].geometry.location.lng);
}).catch((error)=>{
  console.log("error with axios approach..."+error);
})

var weatherSvcCall=(lat,lng)=>{
    weather.getTempUsingAxios(lat,lng).then((response)=>{
      console.log("temp with axios approach..................."+response.data.currently.temperature);
    })
    .catch((error)=>{
      console.log("error with axios approach..."+error);
    })
}

geocode.getLatLngUsingPromise("phoenix").then((response)=>{//this is the third call here..
  console.log("lat with promise approach..."+response.body.results[0].geometry.location.lat);
  console.log("lng with promise approach..."+response.body.results[0].geometry.location.lng);
  //actually we can make here itself and have other then but not working so kept another function
  weatherCall(response.body.results[0].geometry.location.lat,response.body.results[0].geometry.location.lng);
})
.catch((error)=>{
  console.log("error with promise approach..."+error);
})

var weatherCall=(lat,lng)=>{
    weather.getTempUsingPromise(lat,lng).then((response)=>{
      console.log("temp with promise approach..................."+response.body.currently.temperature);
    })
    .catch((error)=>{
      console.log("error with promise approach..."+error);
    })
}
