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
router.put('/blogs/:blogId',commonMw.validator,BlogController.updateBlog)
router.delete("/blog/:blogId",commonMw.validator,BlogController.deleteBlog)
router.delete("/blog",commonMw.validator,BlogController.specificDelete)

////////////////

router.post("/login", AuthorController.login)   











module.exports = router;