const express = require("express");
const {signupUser, loginUser, userData} = require("../controller/user.controller");

const userRouter = express.Router();

// POST --> User Signup
userRouter.post("/signup", signupUser);

// POST --> User Login
userRouter.post("/login", loginUser);

// GET --> Fetch User Data
userRouter.get("/:username", userData);

module.exports = userRouter;