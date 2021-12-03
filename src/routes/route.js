const express = require('express');
const router = express.Router();
let collegeController=require("../controllers/collegeController")
let internController=require("../controllers/internController")



router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",internController.createIntern)











module.exports = router;