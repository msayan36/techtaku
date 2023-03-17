const mongoose = require("mongoose");
const {Schema, Types, model} = mongoose;

const blogSchema = new Schema({
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    coverImg: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: "User",
    },
    authorName: {
        type: String,
        required: true,
    },
    authorImg: {
        type: String,
        required: true,
    },
    authorDesc: {
        type: String,
        required: true,
    },
    genre: {
        type: Types.ObjectId, 
        ref: "Genre"
    },
    genreName: {
        type: String,
        required: true,
    },
    likes: [
        {
            type: Types.ObjectId,
            ref: "User",
        }
    ],
    disLikes: [
        {
            type: Types.ObjectId,
            ref: "User",
        }
    ]
},{
    timestamps: true,
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;