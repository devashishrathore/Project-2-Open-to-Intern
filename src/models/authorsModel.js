const mongoose=require('mongoose')

const myAuthorSchema=new mongoose.Schema({
    author_name: String,
    age:Number,
    address: String,
}, {timestamps: true} )
module.exports=mongoose.model("myAuthor",myAuthorSchema)