
const AuthorModel=require("../models/authorsModel")

//Q1
const authorsCollection=async function(req,res){
    var data=req.body
    let savedData=await AuthorModel.create(data)
    res.send({msg:savedData})
}












module.exports.authorsCollection=authorsCollection
    
