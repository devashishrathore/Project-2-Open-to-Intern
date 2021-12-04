
const collegeModel = require("../models/collegeModel")
const jwt = require('jsonwebtoken')


//Q1
const createCollege = async function (req, res) {
    try {
        
        if(!(Object.values(req.body).length===0)){
            
            let savedCollege = await collegeModel.create(req.body)
            res.status(200).send({ status: true, data: savedCollege })
        }else{
            console.log(body)
            res.status(400).send({ status: false, msg: "body is empty" })
        }
    } catch (err) {
        console.log(err)
        
        res.status(500).send({ status: false, msg: err.message })
    }
}














module.exports.createCollege = createCollege


