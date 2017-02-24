const mongoose = require('mongoose');

//we are telling mongoose that we will use Promise instead of default callback of mongoose
mongoose.Promise=global.Promise;
//heroku db or our local db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
module.exports={mongoose}
