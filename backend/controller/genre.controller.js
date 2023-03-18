const asyncHandler = require("express-async-handler");

// Create Genre | Admin Only
const createGenre = asyncHandler(async (req, res) => {
    res.json({status: 201, msg: "Genre Created"});
});

// Fetch Genre | Public
const fetchGenre = asyncHandler(async(req, res) => {
    res.json({status: 200, msg: "Genre Fetched"});
})

module.exports = {createGenre, fetchGenre};