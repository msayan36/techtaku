const express = require("express");
const { getAllBlogs } = require("../controller/blog.controller.js");

const router = express.Router();

router.get("/", getAllBlogs);

module.exports = router;
