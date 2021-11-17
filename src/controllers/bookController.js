const BookModel= require("../models/bookModel.js")
const AuthorsModel=require("../models/authorsModel.js")
const authorsModel = require("../models/authorsModel.js")

const authorsCollection=async function(req,res){
    var data=req.body
    let savedData=await authorsModel.create(data)
    res.send({msg:savedData})
}

const newBooks=async function(req,res){
    var data=req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
}

const specificBooks=async function(req,res){
   let books= await BookModel.find({"author_id":1})
   res.send({msg:books})
}

const updatedData=async function(req,res){
    let savedData=await BookModel.findOne({name:"Two states"}).select({author_id:1,_id:0})
    //console.log(savedData)
    let author= await AuthorsModel.findOne(savedData).select({author_name:1,_id:0})
   //console.log(author)
   let updatedPrice=await BookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true}).select({price:1,_id:0})
   //console.log(updatedPrice)
  res.send({msg:author,updatedPrice})
}

const findBooks=async function(req,res){
    let books=await BookModel.find({price:{ $gt:49,$lt:101}}).select({author_id:1,_id:0})
    //console.log(books)
    let authorNames=await AuthorsModel.find({$or:books}).select({author_name:1,_id:0})
    //console.log(authorNames)
    res.send({msg:authorNames})
}

module.exports={authorsCollection,newBooks,specificBooks,updatedData,findBooks}
    
