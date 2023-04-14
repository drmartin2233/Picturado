const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// All paths start with '/api/posts'

// POST /api/posts (create a user - sign up)
router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.deletePost);
router.get('/:id', postsCtrl.getPost);
router.put('/:id', postsCtrl.updatePost);


module.exports = router;