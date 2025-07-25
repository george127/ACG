import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import feespaymentRoutes from './routes/feesPaymentRoute.js'
import authRoutes from './routes/authRoutes.js';
import detailsRoutes from './routes/detailRoutes.js';
import newsapiRoute from "./routes/newsapi.js";
import gnewsRoute from "./routes/gnews.js";
import mediastackRoute from "./routes/mediastack.js";
dotenv.config(); // Load environment variables

// Initialize Express app 
const app = express();
app.use(express.json()); // Parse incoming JSON requests



// Allow multiple origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://acg-7xkz.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


// Connect to MongoDB 
mongoose.connect(process.env.MONGO) 
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });

// Health check route 
app.get('/', (req, res) => { 
  res.send('API is running...');
});

app.use('/api/details', detailsRoutes); // This mounts the route at /api/details

app.use('/api/auth', authRoutes)
// Import student routes
app.use('/api/students', studentRoutes); // This mounts the route at /api/students

app.use('/api/fees', feespaymentRoutes);


app.use("/api/newsapi", newsapiRoute);
app.use("/api/gnews", gnewsRoute);
app.use("/api/mediastack", mediastackRoute);

// Start the server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
