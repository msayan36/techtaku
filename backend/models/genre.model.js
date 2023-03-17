const mongoose = require("mongoose");
const {Schema, Types, model} = mongoose;

const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genreDesc: {
        type: String,
        required: true,
    },
    blogs: [
        {
            type: Types.ObjectId,
            ref: "Blog",
        }
    ],
},{
    timestamps: true,
});

const Genre = model("Genre", genreSchema);

module.exports = Genre;