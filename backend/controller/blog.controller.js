const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog.model");
const User = require("../models/user.model");

// GET all blogs | Public
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogData = await Blog.find().sort({createdAt: -1});

  res.status(200).json({ 
    status: 200, 
    msg: "Blog Results", 
    data: blogData 
  });
});

// Create a blog | Protected
const createBlog = asyncHandler(async (req, res) => {
  const {slug, title, coverImg, content, blogSubDesc, genreName} = req.body;

  const {_id, name, img, userDesc} = await User.findById(req.user.id);

  let blogData = {slug, title, coverImg, content, blogSubDesc, author: _id, authorName: name, authorImg: img, authorDesc: userDesc, genreName};

  const _blog = await Blog.create(blogData);

  res.status(201).json({ 
    status: 201, 
    msg: "Blog Created Successfully", 
    data: _blog
  });
});

// Update a blog | Protected
const updateBlog = asyncHandler(async (req, res) => {
  const updatedBlog = req.body;
  const slug = req.params.slug;

  const blog = await Blog.findOneAndUpdate({slug}, updatedBlog);

  if(!blog) res.status(400).json({ status: 400, msg: "Operation is unsuccessful"});
  else res.status(200).json({ status: 200, msg: "Blog Updated Successfully"});

});

// Delete a blog | Protected
const deleteBlog = asyncHandler(async (req, res) => {
  const slug = req.params.slug;

  const blog = await Blog.findOneAndDelete({slug});

  if(!blog) res.status(400).json({ status: 400, msg: "Operation is unsuccessful"});
  else res.status(200).json({ status: 200, msg: "Blog Deleted"});
});

module.exports = { getAllBlogs, createBlog, updateBlog, deleteBlog };
