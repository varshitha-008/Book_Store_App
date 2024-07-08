// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI, {
  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
  
// });

// const db = mongoose.connection;
// console.log("yahoo connected with mongo");
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('MongoDB connected successfully');
// });

// module.exports = mongoose;


const mongoose =require('mongoose');

require('dotenv').config();
// const url=process.env.MONGODB_URI;
const connectToDb=async()=>{
  try{
    console.log("yahoo connected to mongo");
   mongoose.connect(process.env.MONGODB_URI);
  }
  catch(err){
    console.log("connection to mongo failed");
  }
}

module.exports=connectToDb
