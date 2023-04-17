const express = require("express");
const router = express.Router();
const Comment = require("../../models/comment");

router.post("/", (req, res) => {
    console.log(req.body)
  const { name, message, blogPostId } = req.body;
  const newComment = new Comment({ name, message, blogPostId });
  newComment
    .save()
    .then((comment) => res.json(comment))
    .catch((err) => console.log(err));
});

router.get("/:blogPostId", (req, res) => {
  Comment.find({ blogPostId: req.params.blogPostId })
    .sort({ createdAt: "desc" })
    .then((comments) => res.json(comments))
    .catch((err) => console.log(err));
});

module.exports = router;
