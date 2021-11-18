 const mongoose=require('mongoose')
 const ObjectId= mongoose.Schema.Types.ObjectId
 const PublisherId= mongoose.Schema.Types.ObjectId


const myBookSchema=new mongoose.Schema({
         name: String,

        author:{
            type:ObjectId,
            ref:"myAuthor"
        },
        price:Number,
        ratings:Number,
        publisher:{
            type:PublisherId,
            ref:"myPublisher"
        },

    
}, {timestamps: true})


module.exports=mongoose.model("myBook1",myBookSchema)


