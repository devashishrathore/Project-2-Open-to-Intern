
const mongoose = require('mongoose')
//const ObjectId = mongoose.Types.ObjectId
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internsModel')

//---------------------------Validation Functions-------------------------------------------------------------
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

//---------------------------------------------------------------------------------------------------------------

const createInterns = async function (req, res) {
    try {
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide collage details' })
        }
        let {name,mobile,email,collegeName}=req.body
        
        if(!isValid(name)) {
            res.status(400).send({status: false, message: `name is required`})
            return
        }

        if(!isValid(email)) {
            res.status(400).send({status: false, message: `Email is required`})
            return
        }
        
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({status: false, message: `Email should be a valid email address`})
            return
        }

        const isEmailAlreadyUsed = await internModel.findOne({email});

        if(isEmailAlreadyUsed) {
            res.status(400).send({status: false, message: `${email} email address is already registered`})
            return
        }
        if(!isValid(mobile)) {
            res.status(400).send({status: false, message: `Mobile is required`})
            return
        }
        if(!(String(mobile).length===10)){
            res.status(400).send({status: false, message: `given mobile:${mobile} is not of valid 10 Digit number`})
            return
        }
        if(!isValid(collegeName)) {
            res.status(400).send({status: false, message: `Mobile is required`})
            return
        }
        
        let collegeDetail = await collegeModel.findOne({ name:collegeName });
        let { _id } = collegeDetail;

        if(!isValid(_id)) {
            res.status(400).send({status: false, message: 'Author id is required'})
            return
        }

        if(!isValidObjectId(_id)) {
            res.status(400).send({status: false, message: `${authorId} is not a valid author id`})
            return
        }
        
        req.body["collegeId"] = _id
        let savedIntern = await internModel.create(req.body)
        res.status(200).send({ status: true, data: savedIntern })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err })
    }
}




module.exports = { createInterns }





const giveAllInterns = async function (req, res) {
    try {
        if (!isValid(req.query.collegeName)) {
            res.status(400).send({ status: false, message: 'collegeName is not proper' })
            return
        }
        let collegeDetail = await collegeModel.findOne({ name: req.query.collegeName })
        if (!collegeDetail){
            res.send({ status: false, msg: "No college found matching with the given collegeName" })
            return
        }
        let { _id } = collegeDetail
        let allInterns = await internModel.find({ collegeId: _id, isDeleted: false })
        if (allInterns) {
            res.status(200).send({ status: true, data: allInterns })
        } else {
            res.status(400).send({ status: false, msg: "no one has applied for this college" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err })
    }

}
module.exports.giveAllInterns = giveAllInterns



