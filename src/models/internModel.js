
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const internSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)
            }, message: 'Please fill a valid email address', isAsync: false
        }
    },
    mobile:Number, 
    collegeId:{
        type:objectId,
        ref:CollegeDb
    },
    isDeleted: {
        type: Boolean,
        default: false
        }
    }, { timestamps: true })

module.exports = mongoose.model('InternDb', internSchema)























