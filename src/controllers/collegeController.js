
const collegeModel = require("../models/collegeModel")
const jwt = require('jsonwebtoken')


//Q1
const createCollege = async function (req, res) {
    try {
        if(req.body){
            let savedCollege = await collegeModel.create(req.body)
            res.status(200).send({ status: true, data: savedCollege })
        }else{
            res.status(400).send({ status: false, msg: "Mandatory body missing" })
        }
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}














module.exports.createCollege = createCollege


