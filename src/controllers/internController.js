const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

const createIntern = async function (req,res) {
    try{
        if(!(Object.values(req.body).length===0)){
            let collegeDetail=await collegeModel.findOne({name:req.query.collegeName});
            let {_id}=collegeDetail;
            req.body["collegeId"]=_id
            let savedIntern= await internModel.create(req.body)
            res.status(200).send({ status: true, data: savedIntern})
            }else{
                res.status(404).send({status:false,msg:"body is empty"})
            }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err })
    }
}



const giveAllInterns = async function (req, res) {
    try {
        let college = await collegeModel.findOne({ name:req.query.collegeName })
        let {_id} = college
        let allInterns = await internModel.find({ collegeId: _id,isDeleted:false })
        if (!(allInterns.length === 0)) {
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




module.exports.createIntern = createIntern;
module.exports.giveAllInterns = giveAllInterns



