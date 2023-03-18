const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
}

// Signup User | Public
const signupUser = asyncHandler(async (req, res) => {

    const {username, name, email, password} = req.body;

    if(!username || !name || !email || !password) {
        res.status(400).json({status: 400, msg: "Please add all fields"});
    }

    // Check if user exists
    const userExistsByEmail = await User.findOne({email});
    const userExistsByUsername = await User.findOne({username});

    if (userExistsByEmail) res.status(400).json({status: 400, msg: "User already exists with same email address"});
    else if (userExistsByUsername) res.status(400).json({status: 400, msg: "User already exists with same username"});

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        username,
        name,
        email,
        password: hashPassword
    });

    if(user){
        res.status(201).json({
            status: 201, 
            msg: "User SignedUp",
            data: {
                _id: user._id,
                username: user.username,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            }
        });
    } else {
        res.status(400).json({status: 400, msg: "Invalid User Data"});
    }
});

// Login User | Public
const loginUser = asyncHandler(async (req, res) => {

    const {userDet, password} = req.body;

    if(!userDet || !password) {
        res.status(400).json({status: 400, msg: "Please add all fields"});
    }

    let user = await User.findOne({email: userDet});
    if(!user) {
        user = await User.findOne({username: userDet});
    }
    
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            status: 200, 
            msg: "User LoggedIn",
            data: {
                _id: user._id,
                username: user.username,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            }
        });
    } else {
        res.status(400).json({status: 400, msg: "Invalid User Credentials"});
    }
});

// Get Me | Protected
const getMe = asyncHandler(async (req, res) => {

    const {_id, username, name, email} = await User.findById(req.user.id);

    res.status(200).json({status: 200, msg: `Current User Data`, data:{
        id: _id,
        username,
        name,
        email
    }});
});

// Fetch User data | Public
const userData = asyncHandler(async (req, res) => {
    res.json({status: 200, msg: `User Data of Fetched ${req.params.username}`});
});

module.exports = {signupUser, loginUser, userData, getMe};