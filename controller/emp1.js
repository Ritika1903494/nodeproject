const { isValidObjectId } = require("mongoose")
const  ObjectID = require('mongodb').ObjectId;
const empModel=require("../models/employe")


exports.empPost=async(req,res) =>{
    const emp=new empModel(req.body)
        console.log("hi")
    try{
        await emp.save()
        res.status(200).send(emp)
    }
    catch(error){
        await(error)
         res.status(500).send(error)
        
    }
}

exports.empGet=async(req,res)=>{
    const employes=await empModel.find({})
    try{
           res.status(200).send(employes)
    }
    catch(error){
              res.status(500).send(error)
    }
}

exports.empUpdate=async(req,res)=>{
    const update=req.body;
    const emp=await empModel.updateOne({_id:ObjectID(req.params._id)},{$set:update})
    try{
        
        res.status(200).send(emp)
    }
    catch(error){
        res.status(500).send(error)
    }
}

// exports.empDeleteT=async(req,res)=>{
//    const emp= await empModel.deleteOne({email:req.params.email})
//     try{
//         res.status(200).send(emp)
//     }
//     catch(error){
//         res.status(500).send(error)
//     }
   
// }
exports.empDelete=async(request,response)=>{
   
       console.log(request.params._id)
       const emp= await empModel.deleteOne({_id:ObjectID(request.params._id)})
   try{
       response.status(200).send(emp)
   }
   catch(error){
       response.status(500).send(error)
   }
}