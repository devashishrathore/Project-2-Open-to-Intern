const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//router.post('/createBook',  UserController.createBook  );
//router.get('/getAllBooks',  UserController.getListOfBooks );
router.post('/createBooksCollection', UserController.booksCollection);
router.get('/getAllBookColl', UserController.getBookDataColl);
router.post('/getBooksInYear',UserController.booksInYear);
router.post('/getParticularBooks',UserController.particularBooks);
router.get('/getInrBooks',UserController.getXInrBooks);
router.get('/getRandomBooks',UserController.randomBooks)



router.post('/createAuthorsCollection',BookController.authorsCollection);
router.post('/createNewBooks',BookController.newBooks);
router.get('/findspecificBooks',BookController.specificBooks);
router.get('/findupdatedData',BookController.updatedData);
router.get('/findrangeofbooks',BookController.findBooks);



module.exports = router;