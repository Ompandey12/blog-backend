import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import blogRoutes from './routes/blogRoutes';
import authRoutes from './routes/authRoutes';

// Importing Models
import './models/Admin';
import './models/Blog';
import './models/Comments';
import './models/Like';
import './models/User';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
