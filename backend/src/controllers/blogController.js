const Blog = require('../models/Blog');
const User = require('../models/User');

//CRUD Ops for handling blogs
const createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const blog = new Blog({
            title,
            content,
            tags,
            author: req.user.id, // ID from auth middleware
        });
        await blog.save();
        res.status(201).json({ message: "Blog post created successfully", blog });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//To Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//To Get a single blog post by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'name');
        if (!blog) return res.status(404).json({ error: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//To update a blog post
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        if (blog.author.toString() !== req.user.id)
            return res.status(403).json({ error: "Unauthorized to edit this blog" });

        Object.assign(blog, req.body);
        await blog.save();
        res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//To remove a blog post
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        if (blog.author.toString() !== req.user.id)
            return res.status(403).json({ error: "Unauthorized to delete this blog" });

        await blog.remove();
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
