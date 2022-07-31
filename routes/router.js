const express = require("express");
const {
    PostControllerCreate,
    PostControllerGetAll,
    PostControllerGetOne,
    PostControllerUpdate,
    PostControllerDelete,
} = require("../controllers/PostController");

const router = express.Router();

router.post("/posts", PostControllerCreate);
router.get("/posts", PostControllerGetAll);
router.get("/posts/:id", PostControllerGetOne);
router.put("/posts", PostControllerUpdate);
router.delete("/posts/:id", PostControllerDelete);

module.exports = router;
