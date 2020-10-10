const express = require("express");

const { body } = require("express-validator");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getHelloWorld);

router.get("/api/postdata", userController.getPostData);

router.post("/api/addposts", userController.addPosts);

router.patch("/api/likes", userController.patchLikes);

router.patch("/api/updatecomment", userController.patchComments);

module.exports = router;
