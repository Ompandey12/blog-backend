import Blog from '../models/Blog';

export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = await Blog.create({ title, content, author: req.userId });
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name email');
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
