
//console.log("i am present in db");

const mongoose=require('mongoose');//bridge between node.js and mongodb
require('dotenv').config();//this is for .env file


//Define the mongoDB connection Url
//const mongoURL="process.env.mongoURL_LOCAL"//for local database
const mongoURL='mongodb+srv://amansonkusare:amansonkusare@cluster0.bnhgohv.mongodb.net/'// for online database
//const mongoURL=process.env.MONGODB_URL;

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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