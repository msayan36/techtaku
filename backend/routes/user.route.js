const express = require("express");
const {signupUser, loginUser, userData, getMe} = require("../controller/user.controller");
const {protect} = require("../middleware/auth.middleware");

const userRouter = express.Router();

// POST --> User Signup
userRouter.post("/signup", signupUser);

// POST --> User Login
userRouter.post("/login", loginUser);

// GET --> Fetch Current User Data
userRouter.get("/me", protect, getMe);

// GET --> Fetch User Data
userRouter.get("/:username", userData);

module.exports = userRouter;