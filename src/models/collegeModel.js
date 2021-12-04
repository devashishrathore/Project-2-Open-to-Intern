const mongoose=require('mongoose')
const validator=require('validator');

// const authorSchema=new mongoose.Schema({
//     fname:{
//         type:String,
//         required:true
//     },
//     lname:{
//         type:String,
//         required:true
//     },
//     title:{
//         type:String,
//         required:true,
//         enum:['Mr','Mrs','Miss']
//     },
//     email:{
//         type:String,
//         unique: true,
//         validate:{
//             validator:validator.isEmail,
//             message:'{VALUE} is not a valid email',
//             isAsync:false
//         }
//     },
//     password:{
//         type:String,
//         required:true
//     }
// }, {timestamps: true} )




const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    fullName: {
        type: String,
        required: true
    },
    logoLink: {
        type:String,
        required: false
        
    }, 
    isDeleted: {
        type: Boolean,
        default: false
        }
    }, { timestamps: true })

module.exports = mongoose.model('CollegeDb', collegeSchema)



 
//type: String,

