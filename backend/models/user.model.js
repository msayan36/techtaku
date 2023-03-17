const mongoose = require("mongoose");
const {Schema, Types, model} = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    userDesc: {
        type: String,
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

const User = model("User", userSchema);

module.exports = User;