const mongoose = require('mongoose')
const validator=require('validator')
const objectId = mongoose.Schema.Types.ObjectId
const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim:true
    },
    email: {
        type:String,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:'{VALUE} is not a valid email',
            isAsync:false
        },
        trim:true
        },
    mobile: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'Please enter your Mobile number'],
        unique: true,
        minLength: [9, 'number is too small'],
        maxLength: [10,"not good"],
        trim:true
    },
    collegeId: {
        type: objectId,
        ref: "CollegeDb"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })
module.exports = mongoose.model('InternDb', internSchema)