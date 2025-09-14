const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const connectDB = require('./config/db');
connectDB();

// Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const lecturerRoutes = require('./routes/lecturer');
const studentRoutes = require('./routes/student');

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/lecturer', lecturerRoutes);
app.use('/student', studentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
