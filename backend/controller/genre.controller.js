const asyncHandler = require("express-async-handler");

// Create Genre
const createGenre = asyncHandler(async (req, res) => {
    res.json({status: 201, msg: "Genre Created"});
});

// Fetch Genre
const fetchGenre = asyncHandler(async(req, res) => {
    res.json({status: 200, msg: "Genre Fetched"});
})

module.exports = {createGenre, fetchGenre};