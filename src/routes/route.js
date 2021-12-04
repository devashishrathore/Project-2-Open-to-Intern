const express = require('express');
const router = express.Router();
let collegeController=require("../controllers/collegeController")
let internController=require("../controllers/internController")


//1)for saving college details
router.post("/functionup/colleges",collegeController.createCollege)

//2) for saving intern setails
router.post("/functionup/interns",internController.createIntern)

//3)return list of all interns applied for that college
router.get("/functionup/collegeDetails",internController.giveAllInterns)











module.exports = router;