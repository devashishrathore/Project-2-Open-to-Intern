const jwt = require("jsonwebtoken")



const validator = function (req, res, next) {
    
    let token = req.headers["x-api-key"]
    if (token) {
        const validToken = jwt.verify(token, "radium")

        console.log(validToken)
        if (validToken) {
            if (validToken._id == req.query.authorId) {
                console.log("validation is completed ,you can go to main function now")
                next();
            } else {
                res.send("provided token and user id not matched")
            }

        } else {
            res.send({ msg: "invalid Token" })
        }

    } else {
        res.send({ msg: "mandatory header is not present" })
    }


}
module.exports.validator = validator