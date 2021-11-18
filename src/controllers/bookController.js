const BookModel= require("../models/bookModel.js")
const AuthorsModel=require("../models/authorsModel.js")
const authorsModel = require("../models/authorsModel.js")
const publisheridModel = require("../models/publisheridModel.js")

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


//Q1
const myAuthorsCollection=async function(req,res){
    var data=req.body
    let savedData=await authorsModel.create(data)
    res.send({msg:savedData})
}

//Q2
const myBooksCollection=async function(req,res){
    var data=req.body;
    let authorId=req.body.author
    let authorRequest=await authorsModel.findById(authorId)
    let publisherId=req.body.publisher
    let publisherRequest= await publisheridModel.findById(publisherId)
    if(authorRequest && publisherRequest){
        let bookCreated= await BookModel.create(data);
        res.send({data:bookCreated})
    }else{
        res.send("the author Id or publisher id is not valid.")
    }
 };

 //Q3 and Q5
const getMyBooks=async function(req,res){
    let mybooks= await BookModel.find().populate({ path:'author', select:{'author_name': 1, "age":1 }});
    res.send({msg:mybooks});   
} 
 
//Q4
const myPublisher= async function(req,res){
    var data=req.body
    let savedData=await publisheridModel.create(data)
    res.send({msg:savedData})
}




module.exports={authorsCollection,newBooks,specificBooks,updatedData,findBooks}
module.exports.myAuthorsCollection=myAuthorsCollection
module.exports.myBooksCollection=myBooksCollection
module.exports.getMyBooks=getMyBooks
module.exports.myPublisher=myPublisher
    
