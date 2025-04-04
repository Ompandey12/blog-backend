import express from 'express';
import { createBlog, getBlogs } from '../controllers/blogController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createBlog);
router.get('/', getBlogs);

export default router;
