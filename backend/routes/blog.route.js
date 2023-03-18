const express = require("express");
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require("../controller/blog.controller.js");
const {protect} = require("../middleware/auth.middleware");

const blogRouter = express.Router();

// GET --> Fetch all blogs
blogRouter.get("/", getAllBlogs);

// POST --> Create a blog
blogRouter.post("/", protect, createBlog);

// PUT --> Update a blog
blogRouter.put("/:slug", protect, updateBlog);

// DELETE --> Delete a blog
blogRouter.delete("/:slug", protect, deleteBlog);

module.exports = blogRouter;
