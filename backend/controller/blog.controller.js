const asyncHandler = require("express-async-handler");

// GET all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  res.json({ status: 200, msg: "Blog Results" });
});

// Create a blog
const createBlog = asyncHandler(async (req, res) => {
  res.json({ status: 201, msg: "Blog Created"});
});

// Update a blog
const updateBlog = asyncHandler(async (req, res) => {
  res.json({ status: 204, msg: "Blog Updated"});
});

// Delete a blog
const deleteBlog = asyncHandler(async (req, res) => {
  res.json({ status: 200, msg: "Blog Deleted"});
});

module.exports = { getAllBlogs, createBlog, updateBlog, deleteBlog };
