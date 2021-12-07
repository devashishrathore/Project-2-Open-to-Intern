const mongoose = require('mongoose');


const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    fullName: {
        type: String,
        required: [true, 'fullname is required'],
    },
    logoLink: {
        type: String,
        required: [true, 'logolink is required']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

    

module.exports = mongoose.model('CollegeDb', collageSchema)
