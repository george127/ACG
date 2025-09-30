import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';   
import studentRoutes from './routes/studentRoutes.js';
import feespaymentRoutes from './routes/feesPaymentRoute.js';
import authRoutes from './routes/authRoutes.js';
import detailsRoutes from './routes/detailRoutes.js';
import feesProgressRoutes from './routes/feesProgressRoute.js';
import profileRoutes  from './routes/profileRoute.js'; 
 
dotenv.config();

const app = express();
app.use(express.json());
   
// Improved CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173', 
      'https://acg-7euk.onrender.com',
      'https://acg-7xkz.onrender.com'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-LocalStorage'] 
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Explicitly handle OPTIONS requests
app.options('*', cors(corsOptions));

app.use(session({
  secret: process.env.SESSION_SECRET, // Make sure this is set in your Render environment variables
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Set to true in production (HTTPS only)
    sameSite: 'none', // Required for cross-site cookies
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/details', detailsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/fees', feespaymentRoutes);
app.use('/api/progress', feesProgressRoutes);
app.use('/api/profile', profileRoutes);

// Health Check
app.get('/', (req, res) => res.send('API is running'));

// Start Server
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});