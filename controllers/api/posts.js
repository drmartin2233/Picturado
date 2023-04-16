
const Post = require('../../models/post');

module.exports = {
 index,
 create,
 deletePost,
 getPost,
 updatePost
};


async function index(req, res) {
  try {
    // Add the user to the db
    const posts = await Post.find({userId: req.user._id});
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
    console.log(req.body)
    try {

       req.body.userId = req.user._id
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

async function getPost(req, res) {
  try {

    
     
    const foundPost = await Post.findById(req.params.id);
    res.json(foundPost);
   
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function updatePost(req, res) {
let postBody = {
  title: req.body.title,
  body: req.body.body
}

  try {

     const updatedPost = await Post.findByIdAndUpdate(req.body._id, {$set: postBody}, {new: true} );

     res.json(updatedPost)
   } catch (err) {
     console.log(err)
     res.status(400).json(err);
   }
}