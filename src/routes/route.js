const express = require('express');
const router = express.Router();

const AuthorModel=require("../models/authorsModel")
const blogModel=require("../models/blogModel")

const AuthorController= require("../controllers/authorcontroller")
const BlogController= require("../controllers/blogController")



router.post('/authors',AuthorController.authorsCollection);
router.post('/blogs', BlogController.createBlog);
router.get("/blogs",BlogController.getThisBlog)
router.put('/blogs/:blogId', BlogController.updateBlog)
router.delete("/blog/:blogId",BlogController.deleteBlog)
router.delete("/blog",BlogController.specificDelete)









module.exports = router;