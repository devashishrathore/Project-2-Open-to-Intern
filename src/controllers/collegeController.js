const collegeModel = require('../models/collegeModel');




const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const createCollege = async function (req, res) {
    try{
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'request body is emptey' })
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
