
const Post = require('../../models/post');

module.exports = {
 index,
 create,
 deletePost
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
    console.log(req.body)
    try {

       req.body.user = req.user._id
        console.log(req.body)
       const createdPost = await Post.create(req.body);
 
       res.json(createdPost)
     } catch (err) {
       console.log(err)
       res.status(400).json(err);
     }
 }

async function deletePost(req, res) {
  try {

    
     
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    console.log(deletedPost);
   
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}
