
const AuthorModel = require("../models/authorsModel")
const jwt = require('jsonwebtoken')
const commonMw=require("../middleware/commonmiddleware")

//Q1
const authorsCollection = async function (req, res) {
    try {
        let data = req.body
        
       
        if (data) {
            let savedData = await AuthorModel.create(data)
            res.status(200).send({ status: true, msg: savedData })
        } else {
            res.status(400).send({ status: false, msg: "Mandatory body missing" })
        }
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




///Authentication

//Q1
const login= async function (req, res) {

    let loginBody=req.body;
    let author=await AuthorModel.findOne({$and:[{email:loginBody.email},{password:loginBody.password},{isDeleted:false}]})
   
    
    if (author){
        let token=await jwt.sign({_id:author._id},"radium")
        res.setHeader("x-api-key",token) 
        res.send({status:true,msg:"user logged in successfully"})
        // 
    }else{
        res.send({
            status:false,
            msg:"invalid Credentials"
        })
    }
        
}









module.exports.authorsCollection = authorsCollection
module.exports.login=login

