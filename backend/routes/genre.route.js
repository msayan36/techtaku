const express = require("express");
const {createGenre, fetchGenre} = require("../controller/genre.controller");

const genreRouter = express.Router();

// POST --> Create Genre
genreRouter.post("/", createGenre);

// GET --> Fetch Genre
genreRouter.get("/", fetchGenre);

module.exports = genreRouter;