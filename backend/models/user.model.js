const mongoose = require("mongoose");
const {Schema, Types, model} = mongoose;

const userSchema = new Schema({
    isAdmin: {
        type: Boolean,
        default: false,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
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