
const Post = require('../../models/post');

module.exports = {
 index,
 create
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

async function create(req, res) {
    try {
       req.body.user = req.user._id
 
       const createdPost = await Post.create(req.body);
 
       res.json(createdPost)
     } catch (err) {
       console.log(err)
       res.status(400).json(err);
     }
 }


