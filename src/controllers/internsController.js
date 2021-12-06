
//const mongoose = require('mongoose')
//const ObjectId = mongoose.Types.ObjectId
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internsModel')


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}



const createInterns = async function (req, res) {
    try {
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide collage details' })

        }
        let collegeDetail = await collegeModel.findOne({ name: req.body.collegeName });
        console.log(collegeDetail)
        console.log(req.body.collegeName)

        let { _id } = collegeDetail;
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
        if (!collegeDetail) res.send({ status: false, msg: "No college found matching with the given collegeName" })
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



