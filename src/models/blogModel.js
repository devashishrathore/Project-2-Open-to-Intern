
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        authorId: {
            type: ObjectId,
            required: true,
            ref: "Author"
        },

        tags: [String],
        category: { type: String, required: true },
        //examples: [technology, entertainment, life style, food, fashion]}, 
        subcategory: [String],       //examples[technology-[web development, mobile development, AI, ML etc]] }, 
        isPublished: { type: Boolean, default: false },//type:Boolean
        publishedAt: String,  // {when the blog is published}, 
        isDeleted: { type: Boolean, default: false },
        deletedAt: String, //when the document is deleted

    }, { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
























