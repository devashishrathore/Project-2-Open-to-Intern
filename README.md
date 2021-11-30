# radium
Repository for backend cohort - Radium


# step 1
install mongoose : npm i mongoose (from parent folder)


# step 2
use MOdel to interact with DB


#step 3
break your code into correct folder structure 



//const updateBlog = async function(req, res) {
    let blogId = req.params.blogId
    //let newTitle = req.body.title
    let newBody = req.body
    //let publishedAt = req.body.publishedAt.Date()
    let blogDetails = await blogModel.findOneAndUpdate({ _id: blogId }, newBody, { new: true })
    if (blogDetails) {
        res.status(200).send({ status: true, message: blogDetails })
    } else {
        res.status(404).send({ status: false, msg: "Incorrect credentials !" })
    }
};


Q6
let deleteBlogQuery=async function(req,res){
    try{
        let Id=req.query.q;
        let blog=await blogModel.findOne({$or:[{authorId:Id},{tag:Id},{subcategory:Id}]})
        console.log(blog)
        if(blog){
            let deletedTime=String(new Date());
            await blogModel.findOneAndUpdate({_id:Id},{isDeleted:true,deletedAt:deletedTime})
            res.status(200).send({msg:"your blog is Deleted Successfully"})
        }else{
            res.status(400).send({
                status:false,
                msg:"blog is already Deleted or blockId does not exist"
            })
        }

    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
    


}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0OTM2Njg0NWM5MzhlMDMxODY1NWEiLCJpYXQiOjE2MzgyNjQxMTd9.BwFN0wGGtzAKIiHt9S_A7eqSj1JnmBTXF8Ie6mc88GA




$push: { tags: { $each: req.body.tags } }, $push: { subcategory: { $each: req.body.subcategory } }

