const jwt = require("jsonwebtoken")


const validator = function (req, res, next) {
    let token = req.headers["x-api-key"]
    if (token) {
        const validToken = jwt.verify(token, "radium")
        console.log(validToken)
        if (validToken) {
            
            console.log("u can go to main function now")
            req.validToken=validToken
            next();
        }else {
            res.send({ msg: "invalid Token" })
        }
    } else {
        res.send({ msg: "mandatory header is not present" })
    }
}



module.exports.validator = validator