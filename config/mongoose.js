

const mongoose = require('mongoose');
const URL = process.env.Mongourl;

mongoose.connect(URL)
.then(()=>console.log('MongoDb Is Up And Connected '))
.catch((error)=>console.log('error connected in Db',error));