
const {
    create,
    getAll,
    getOne,
    update,
    deleteById,
} = require("../service/PostService.js");

const PostControllerCreate = async (req, res) => {
    try {
        const post = await create(req.body, req.files.img);
        res.json(post);
    } catch (error) {
        console.log(error);
    }
};

const PostControllerGetAll = async (req, res) => {
    try {
        const posts = await getAll();
        return res.json(posts);
    } catch (error) {
        console.log(error);
    }
};

const PostControllerGetOne = async (req, res) => {
    try {
        const post = await getOne(req.params.id);
        return res.json(post);
    } catch (error) {
        console.log(error);
    }
};

const PostControllerUpdate = async (req, res) => {
    try {
        const updatedPost = await update(req.body);
        return res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }
};

const PostControllerDelete = async (req, res) => {
    try {
        const post = await deleteById(req.params.id);
        return res.json(post);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    PostControllerCreate,
    PostControllerGetAll,
    PostControllerGetOne,
    PostControllerUpdate,
    PostControllerDelete,
};
