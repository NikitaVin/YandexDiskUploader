const Post = require("../modules/Post");
const { saveFile } = require("./fileService");

const create = async (post, img) => {
    const fileName = saveFile(img);
    const createdPost = await Post.create({ ...post, img: fileName });
    return createdPost;
};

const getAll = async () => {
    const posts = await Post.find();
    return posts;
};

const getOne = async (id) => {
    if (!id) {
        throw new Error("не указан ID");
    }
    const post = await Post.findById(id);
    return post;
};

const update = async (post) => {
    if (!post._id) {
        throw new Error("не указан ID");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
    });
    return updatedPost;
};

const deleteById = async (id) => {
    if (!id) {
        throw new Error("не указан ID");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
};

module.exports = { create, getAll, getOne, update, deleteById };
