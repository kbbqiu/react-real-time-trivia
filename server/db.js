// sets up with mlabs
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-trivia') 

// (err, database) => {
//   if(err) return console.log(error);
//   console.log("connected to mongoDB database")
// });