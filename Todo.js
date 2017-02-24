const mongoose = require('mongoose');
var Todo=mongoose.model('Todo',{
  text:{
    required:true,
    type:String,
    minlength:1,
    trim:true
  },
  completed:{
    default:false,
    type:Boolean
  },
  completedAt:{
    default:null,
    type:Number
  }
})
module.exports={Todo}
