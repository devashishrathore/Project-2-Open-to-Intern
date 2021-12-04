
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
const validator=require("validator")



const internSchema = new mongoose.Schema({
    name: String,
    mobile:Number,
    email:{
        type:String,
        unique: true,
        validate:{
            validator:validator.isEmail,
            message:'{VALUE} is not a valid email',
            isAsync:false
        }
    },
     collegeId:{
        type:ObjectId,
        ref:"CollegeDb"
    },
    isDeleted: {
        type: Boolean,
        default: false
        }
    }, { timestamps: true })

module.exports = mongoose.model('InternDb', internSchema)























