const collegeModel = require('../models/collegeModel');

//---------------------------Validation Functions---------------------------------------------------------

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}


//----------------------------------------------------------------------------------------------------------
const createCollege = async function (req, res) {
    try{
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide collage details' })
        }
        let {name,fullName,logoLink}=req.body
        
        if(!isValid(name)) {
            res.status(400).send({status: false, message: `name is required`})
            return
        }

        if(!isValid(fullName)) {
            res.status(400).send({status: false, message: `fullName is required`})
            return
        }

        if(!isValid(logoLink)) {
            res.status(400).send({status: false, message: `logoLink is required`})
            return
        }

        if(!(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(logoLink) &&logoLink.includes(".com")==true)) {
            res.status(400).send({status: false, message: `logoLink is not a valid URL`})
            return
        }
        
        let createdCollege= await collegeModel.create(req.body)
        res.status(201).send({ status:true, msg:createdCollege})
} 
catch(err){
    res.status(500).send({status:false,data:err});
    console.log(err)
}
}



module.exports = { createCollege }
