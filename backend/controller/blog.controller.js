const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog.model");

// GET all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogData = await Blog.find().sort({createdAt: -1});

  res.json({ 
    status: 200, 
    msg: "Blog Results", 
    data: blogData 
  });
});

// Create a blog
const createBlog = asyncHandler(async (req, res) => {
  let blogData = req.body;
  const _blog = await Blog.create(blogData);

  res.json({ 
    status: 201, 
    msg: "Blog Created Successfully", 
    data: _blog
  });
});

// Update a blog
const updateBlog = asyncHandler(async (req, res) => {
  const updatedBlog = req.body;
  const slug = req.params.slug;

  const blog = await Blog.findOneAndUpdate({slug}, updatedBlog);

  if(!blog) res.json({ status: 400, msg: "Operation is unsuccessful"});
  else res.json({ status: 204, msg: "Blog Updated Successfully"});

});

// Delete a blog
const deleteBlog = asyncHandler(async (req, res) => {
  const slug = req.params.slug;

  const blog = await Blog.findOneAndDelete({slug});

  if(!blog) res.json({ status: 400, msg: "Operation is unsuccessful"});
  else res.json({ status: 200, msg: "Blog Deleted"});
});

module.exports = { getAllBlogs, createBlog, updateBlog, deleteBlog };
