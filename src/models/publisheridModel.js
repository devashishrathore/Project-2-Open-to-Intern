const mongoose=require('mongoose')


const myPublisherSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    headquarter:String
}, {timestamps: true} )
module.exports=mongoose.model("myPublisher",myPublisherSchema)