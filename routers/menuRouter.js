const express=require('express');
const router=express.Router();
const menu=require('./../models/menu');



//post method for menu

router.post ('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu=new menu(data);
        const response=await newMenu.save();
        console.log('menu saved');
res.status(200).json(response);

    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});

    }
})

//get menu data

router.get('/', async(req,res)=>{
    try{
         const data=await menu.find(); 
         console.log('menu fatch');
         res.status(200).json(data); 
    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
    }
})


//parameterize menu data based on taste

router.get('/:taste', async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sweet' || taste=='spicy' || taste=='sour' ){
         const data=await menu.find({taster:taste}); 
         console.log('menu fatch');
         res.status(200).json(data); 
        }else{
                    res.status(400).json({error:'invalid worktype'})

        }
    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
    }
})


module.exports=router;

