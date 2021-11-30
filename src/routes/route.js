const express = require('express');
const router = express.Router();

const AuthorModel=require("../models/authorsModel")
const blogModel=require("../models/blogModel")

const AuthorController= require("../controllers/authorcontroller")
const BlogController= require("../controllers/blogController")
const commonMw=require("../middleware/commonmiddleware")


router.post('/authors',AuthorController.authorsCollection);
router.post('/blogs',commonMw.validator, BlogController.createBlog);
router.get("/blogs",commonMw.validator,BlogController.getThisBlog) 
router.put('/blogs/:blogId', BlogController.updateBlog)
router.delete("/blog/:blogId",BlogController.deleteBlog)
router.delete("/blog",BlogController.specificDelete)

////////////////

router.post("/login", AuthorController.login)   











module.exports = router;