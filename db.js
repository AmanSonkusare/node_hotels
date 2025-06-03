
//console.log("i am present in db");

const mongoose=require('mongoose');//bridge between node.js and mongodb
require('dotenv').config();//this is for .env file


//Define the mongoDB connection Url
//const mongoURL='mongodb://localhost:27017/hotel';
//const mongoURL=process.env.MONGOURL_LOCAL//for local database
//const mongoURL='mongodb+srv://amansonkusare:amansonkusare@cluster0.bnhgohv.mongodb.net/'// for online database
//const mongoURL=process.env.MONGODB_URL;


//const dotenv = require("dotenv").config();


mongoose.connect(process.env.MONGODB_URL, {

    useUnifiedTopology: true,

    useNewUrlParser: true,

}).then(console.log('connect sucess to mongodb'))




//set up mongodb connection
// mongoose.connect(process.env.MONGOURL_LOCAL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

const db=mongoose.connection;

//define event listner for database connection
db.on('connected',() => {
    console.log("Connected to mongodb server");
});

db.on('error',(err) => {
    console.error("MongoDB connection errors",err);
});

db.on('disconnected',() => {
    console.log("MongoDB disconnected");
});

//export the database connection
module.exports=db;