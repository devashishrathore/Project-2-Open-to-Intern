const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeController');
const internsController = require('../controllers/internsController');


//1)for saving college details
router.post('/functionUp/Colleges', collegeController.createCollege);

//2) for saving intern setails
router.post('/functionUp/interns', internsController.createInterns);


//3)return list of all interns applied for that college
router.get("/functionup/collegeDetails",internsController.giveAllInterns)










module.exports = router;