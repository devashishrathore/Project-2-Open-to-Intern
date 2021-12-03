const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

const createIntern = async function (req, res) {
    try {
        if(req.body){
            
            let collegeDetail=await collegeModel.findOne({name:req.params.collegeName});
            let [_id]=collegeDetail;
            req.body["collegeId"]=_id
            let savedIntern= await internModel.create(req.body)
            res.status(200).send({ status: true, data: savedIntern })
        }else{
            res.status(400).send({ status: false, msg: "Mandatory body missing" })
        }
    } catch (err) {
        res.status(500).send({ status: false, msg:err})
    }
}







module.exports.createIntern = createIntern;




