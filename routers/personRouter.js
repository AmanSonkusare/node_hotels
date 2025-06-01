const express=require('express');
const router=express.Router();
const person=require('./../models/person');


router.post('/',async(req,res) =>{
    
    try{
const data=req.body  //Assuming frequest body contain person data

    //create new person using mongoogs model

    const newPerson=new person(data);

   //save new person to database
   const response=await newPerson.save();

console.log('data saved');
res.status(200).json(response);

}catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
}

})


//get method
router.get('/', async(req,res)=>{
    try{
         const data=await person.find(); 
         console.log('data fatch');
         res.status(200).json(data); 
    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
    }
})



//parameterize api

router.get('/:workType',async(req,res)=>{
    try{
const workType=req.params.workType;
    if(workType=='chef'|| workType=='manager' ||workType=="waiter"){
        const response=await person.find({work: workType});
        console.log('data fatch');
         res.status(200).json(response); 
    }else{
        res.status(400).json({error:'invalid worktype'})
    }
    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
    }
})


router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;
        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        });
        if(!response){
            return  res.status(404).json({error:'person not found'});
        }
console.log('data fatch');
         res.status(200).json(response); 

    }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
    }
    
})


router.delete('/:id',async (req,res) => {
    try{
    const personId=req.params.id;
    const response=await person.findByIdAndDelete(personId);
    if(!response){
                  return  res.status(404).json({error:'person not found'});
                }
                console.log('data fatch');
         res.status(200).json({message:"person delete successfully"}); 
            }catch(err){
console.log(err);
res.status(500).json({error:'Internal sever error'});
   
            }
})

module.exports=router;