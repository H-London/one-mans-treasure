const mongoose = require('mongoose');
const uriString = process.env.MONGODB_URI || 'mongodb://localhost/greenfield';

mongoose.connect(uriString);
let db = mongoose.connection;
db.once('open', ()=>{
  console.log('greenfield database connected');
});


module.exports = db;