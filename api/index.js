// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import studentRoutes from './routes/studentRoutes.js';
// import feespaymentRoutes from './routes/feesPaymentRoute.js'
// import authRoutes from './routes/authRoutes.js';
// import detailsRoutes from './routes/detailRoutes.js';
// import newapiRoute from './routes/newsapiRoute.js';
// dotenv.config(); // Load environment variables

// // Initialize Express app 
// const app = express();
// app.use(express.json()); // Parse incoming JSON requests

// app.use(cors({
//  origin: '*',
//   credentials: true,
// }));

// // Connect to MongoDB 
// mongoose.connect(process.env.MONGO) 
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1); // Exit process with failure
//   });
 
// // Health check route 
// app.get('/', (req, res) => { 
//   res.send('API is running...');
// });

// app.use('/api/details', detailsRoutes); // This mounts the route at /api/details

// app.use('/api/auth', authRoutes)
// // Import student routes
// app.use('/api/students', studentRoutes); // This mounts the route at /api/students

// app.use('/api/fees', feespaymentRoutes);
// // Import news API route
// app.use('/api/news', newapiRoute); // This mounts the route at /api/news

// // In api/index.js, change the listen line to:
// app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
//   console.log(`Server running on port ${process.env.PORT || 5000}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
import feespaymentRoutes from './routes/feesPaymentRoute.js';
import authRoutes from './routes/authRoutes.js';
import detailsRoutes from './routes/detailRoutes.js';
import newapiRoute from './routes/newsapiRoute.js';
dotenv.config(); // Load environment variables

// Initialize Express app 
const app = express();
app.use(express.json()); // Parse incoming JSON requests

app.use(cors({
  origin: [
    'http://localhost:5000', // Your frontend origin
    'https://acg-7xkz.onrender.com' // Your frontend URL if deployed
  ],
  credentials: true
}));

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
// Import news API route
app.use('/api/news', newapiRoute); // This mounts the route at /api/news

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});