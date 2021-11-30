
const AuthorModel = require("../models/authorsModel")

//Q1
const authorsCollection = async function (req, res) {
    try {
        var data = req.body
        let email = req.email
       // const validateEmail = (email) => {
       // return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
       // }
     //   var validateEmail = function(email) {
        //    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //    return re.test(email)
        //};
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












module.exports.authorsCollection = authorsCollection

