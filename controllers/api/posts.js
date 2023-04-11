
const Post = require('../../models/post');

module.exports = {
 index
};


async function index(req, res) {
  try {
    // Add the user to the db
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}



