const post = require("../../models/post");
const router = require("express").Router();

router.post(`/`, async (req, res) => {
    try {
        const addPost = await post.create({
            title: req.body.title,
            content: req.body.content,
            username_id: req.body.username,
        });
        res.status(200).json(addPost);
    } catch (err) {
        res.status(500).json({ message: "Something Couldn't Create Post" });
    }
});

module.exports = router;