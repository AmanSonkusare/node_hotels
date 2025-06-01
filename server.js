


console.log("i am present in sever file");

// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a + b;
// }

// var add = (a,b) => {
//     return a+b;
// }

// var add =(a,b)=> a+b;

//  var result=add(2,4);
//  console.log(result);

//  we can create function this type
//  (function(){
//     console.log("prince is added");
//  })();


// now we pratice about callby function

// function callback(){
//     console.log("i am present inside callback function");
// }

// const add=function(a,b){
// var result =a+b;
// console.log(result);
// callback();
// }

// add(10,20);

// const add=function(a,b,prince){
// var result =a+b;
// console.log(result);
// prince();

// }

// add(10,20,function(){
//     console.log("add complete");
// });

// add(50,50,()=> console.log("now i am creat anonymus function"))

//how to import node.js file
// var fs=require('fs');//file system
// var os=require('os');
//  var user=os.userInfo();
//  console.log(user.username);

//  fs.appendFile('greeting.txt','hi'+user.username,()=>{
//     console.log("file is created")
//  })

// const notes=require('./notes.js');

// console.log("sever faile is available");

// console.log(notes.age);

// const addition=notes.addnumber(10,29);
// console.log(addition);
// ///
// var p=require('lodash');

// var data=["person","person",1,2,1,2,'name','age','2'];
// const filter=p.uniq(data);
// console.log(filter);

// console.log(p.isString('person'));

// //json topic start
// const objectToConvert={
//     name:"aman",
//     age:25
// };
// const json=JSON.stringify(objectToConvert);//convert object to json string
// console.log(json);

// console.log(typeof json);

////////////////////////////////////////////////

const express=require('express');
const app = express();
const db=require('./db');

const person=require('./models/person');
const menu =require('./models/menu');

const bodyParse=require('body-parser');
//const persson = require('./models/person');
app.use(bodyParse.json());



app.get('/', (req, res) => {
  res.send('Hello World now')
})

app.get ('/chiken',(req,res)=>{
    res.send("i would love to chiken")
})

app.get('/iddle',(req,res)=>{
    var customize_idli={
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:true
    }
    res.send(customize_idli)
})



app.post('/items',(req,res)=>{
    res.send('data is saved')
})

///////////////////////////////////////////////////

//import the router file

const personRouters =require('./routers/personRouter');
//use the router
app.use('/person',personRouters)


const menuRouter =require('./routers/menuRouter');
//use the router
app.use('/menu',menuRouter)



app.listen(3000,()=>{
    console.log("i am present in port number 3000")
})