// import express from 'express';
// // import rateLimit from 'express-rate-limit';
// import { SignUp, LogIn} from '../controllers/authController.js';
// import { validateSignUp, validateLogIn } from '../middleware/validationMiddleware.js';
// import { protect } from '../middleware/authMiddleware.js';



// const router = express.Router();

// // Set up login rate-limiting
// // const loginLimiter = rateLimit({
// //   windowMs: 15 * 60 * 1000, // 15 minutes
// //   max: 5, // Limit each IP to 5 login attempts per window
// //   message: 'Too many login attempts. Please try again later.', // Custom message for rate limiting
// // });

// // Apply the rate-limiting middleware to the login route
// router.post('/login', validateLogIn, LogIn);
// router.post('/signup', validateSignUp, SignUp);

// router.get('/profile', protect);

// export default router;


import express from 'express';
import { SignUp, LogIn } from '../controllers/authController.js';
import { validateSignUp, validateLogIn } from '../middleware/validationMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', validateSignUp, SignUp); // Added signup validation middleware
router.post('/login', validateLogIn, LogIn);    // Added login validation middleware

router.get('/profile', protect); // Protect route to fetch user profile

export default router;
