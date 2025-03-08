const express = require('express');
const { createPost, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

const authenticateJWT = require('../middleware/authenticateJWT');

// To protect the blog routes with the authentication middleware
router.post('/', authenticateJWT, createPost);
router.put('/:id', authenticateJWT, updatePost);
router.delete('/:id', authenticateJWT, deletePost);

module.exports = router;
