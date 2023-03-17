const asyncHandler = require("express-async-handler");

// Signup User
const signupUser = asyncHandler(async (req, res) => {
    res.json({status: 201, msg: "User SignedUp"});
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    res.json({status: 200, msg: "User LoggedIn"});
});

// Fetch User data
const userData = asyncHandler(async (req, res) => {
    res.json({status: 200, msg: `User Data of Fetched ${req.params.username}`});
});

module.exports = {signupUser, loginUser, userData};