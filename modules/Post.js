const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
    content: { type: String, required: true },
    img: { type: String },
});
module.exports = mongoose.model("Post", Post);
