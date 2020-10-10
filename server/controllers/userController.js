const Instagram = require("../models/inst-clone-model");

module.exports.getHelloWorld = (req, res, next) => {
    res.send("<h1>Hello World.</h1>");
};

module.exports.getPostData = (req, res, next) => {
    Instagram.find()
        .sort({ createdAt: -1 })
        .then((posts) => {
            res.status(200).json({
                message: "records found",
                posts: posts,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "no records found",
                error: err,
            });
        });
};

module.exports.addPosts = (req, res, next) => {
    const { username, caption, isLiked, likeCounter, postImageURL } = req.body;

    const instagram = new Instagram({
        userName: username,
        postImageURL: postImageURL,
        caption: caption,
        isLiked: isLiked,
        likeCounter: likeCounter,
    });
    instagram
        .save()
        .then((result) => {
            res.status(201).json({
                message: "posted successfully",
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "unable to post",
                error: err,
            });
        });
};

module.exports.patchLikes = (req, res, next) => {
    const liked = req.body.liked;
    const likes = req.body.likes;
    const postId = req.query.postId;
    Instagram.findById(postId)
        .then((post) => {
            if (!post) {
                res.status(404).json({
                    message: "no data found",
                    status: 404,
                    error: "404 not found",
                });
            }
            post.isLiked = liked;
            post.likeCounter = likes;
            return post.save();
        })
        .then((result) => {
            res.status(201).json({
                message: "successfully updated",
                status: 201,
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "unable to update likes",
                status: 500,
                error: err,
            });
        });
};

module.exports.patchComments = (req, res, next) => {
    const { username, comments } = req.body;
    Instagram.findById(req.query.postId)
        .then((post) => {
            if (!post) {
                res.status(404).json({
                    message: "no post found",
                });
            }
            post.comments.push({
                ...post.comments,
                username: username,
                comment: comments,
            });
            return post.save();
        })
        .then((result) => {
            res.status(201).json({
                message: "comment added successfully",
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "unable to update comments",
                status: 500,
                error: err,
            });
        });
};
