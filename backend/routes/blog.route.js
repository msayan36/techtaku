const express = require("express");
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require("../controller/blog.controller.js");

const blogRouter = express.Router();

// GET --> Fetch all blogs
blogRouter.get("/", getAllBlogs);

// POST --> Create a blog
blogRouter.post("/", createBlog);

// PUT --> Update a blog
blogRouter.put("/:slug", updateBlog);

// DELETE --> Delete a blog
blogRouter.delete("/:slug", deleteBlog);

module.exports = blogRouter;
