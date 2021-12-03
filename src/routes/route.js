const express = require('express');
const router = express.Router();

const AuthorModel=require("../models/authorsModel")
const blogModel=require("../models/blogModel")

const AuthorController= require("../controllers/authorcontroller")
const BlogController= require("../controllers/blogController")
const commonMw=require("../middleware/commonmiddleware")


router.post('/authors',AuthorController.authorsCollection);

//create blog
router.post('/blogs',commonMw.validator, BlogController.createBlog);//done
//get blogs with query and without query
router.get("/blogs",commonMw.validator,BlogController.getThisBlog) //done

router.put('/blogs/:blogId',commonMw.validator,BlogController.updateDetails)//done

router.delete("/blog/:blogId",commonMw.validator,BlogController.deleteBlog)//done

router.delete("/blog",commonMw.validator,BlogController.specificDelete)//done

////////////////

router.post("/login", AuthorController.login)   











module.exports = router;