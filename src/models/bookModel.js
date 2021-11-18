 const mongoose=require('mongoose')
 const ObjectId= mongoose.Schema.Types.ObjectId


const myBookSchema=new mongoose.Schema({
         name: String,

        author:{
            type:ObjectId,
            ref:"myAuthor"
        },
        price:Number,
         ratings:Number,

    
}, {timestamps: true})


module.exports=mongoose.model("myBook",myBookSchema)


