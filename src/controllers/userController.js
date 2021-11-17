const UserModel= require("../models/userModel.js")

// const createBook= async function (req, res) {
//     var data= req.body
//     let savedBook= await UserModel.create(data)
//     res.send({msg: savedBook})    
// }


// // const getListOfBooks= async function (req, res) {
//     let allBooks= await UserModel.find()
//     res.send({msg: allBooks})
// }

const booksCollection=async function(req,res){
    var data=req.body
    let savedBook=await UserModel.create(data)
    res.send({msg:savedBook})
}

const getBookDataColl= async function (req,res){
    let allUsers= await UserModel.find().select({ bookName: 1, authorName:1, _id:0})
    res.send({  msg:allUsers })
}

const booksInYear=async function(req,res){
    var data=req.body.year
    let savedData=await UserModel.find({year:data})
    res.send({msg:savedData})
}

const particularBooks=async function(req,res){
    var value=req.body
    let savedData=await UserModel.find(value)
    res.send({msg:savedData})
}

const getXInrBooks=async function(req,res){
    var value=req.body
    let savedData=await UserModel.find({'prices.indianPrice':{$in:["100INR","200INR","500INR"]}})
    res.send({msg:savedData})
}

const randomBooks=async function(req,res){
    var value=req.body
    let savedData=await UserModel.find({$or:[{stockAvailable:true},{'totalPages':{$gt:500}}]})
    res.send({msg:savedData})
}
// module.exports.createBook= createBook
// module.exports.getListOfBooks= getListOfBook
module.exports.booksCollection=booksCollection
module.exports.getBookDataColl=getBookDataColl
module.exports.booksInYear=booksInYear
module.exports.particularBooks=particularBooks
module.exports.getXInrBooks=getXInrBooks
module.exports.randomBooks=randomBooks
