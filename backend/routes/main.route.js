const express = require("express");
const blogRouter = require("./blog.route");
const userRouter = require("./user.route");
const genreRouter = require("./genre.route");

const mainRouter = express.Router();

// blog routes
mainRouter.use("/api", blogRouter);

// user routes
mainRouter.use("/api/user", userRouter);

// genre routes
mainRouter.use("/api/genre", genreRouter);

module.exports = mainRouter;