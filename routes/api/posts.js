const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// All paths start with '/api/posts'

// POST /api/users (create a user - sign up)
router.get('/', postsCtrl.index);


module.exports = router;