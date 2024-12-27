const express = require('express');
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createBlog);         // To create a blog post
router.get('/', getAllBlogs);                         // To get all blogs
router.get('/:id', getBlogById);                      // To get blog by ID
router.put('/:id', authMiddleware, updateBlog);       // To update a blog post
router.delete('/:id', authMiddleware, deleteBlog);    // To remove a blog post

module.exports = router;
