const asyncHandler = require("express-async-handler");

// GET all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  res.json({ res: 200, msg: "Blog Results" });
});

module.exports = { getAllBlogs };
