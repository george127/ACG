import express from 'express';
import { 
  getProfileImage, 
  updateProfileImage,
  getPhoneNumber,
  updatePhoneNumber,
  getUserProfile, 
  updateUserName, 
  updateUserEmail, 
  updateUserPassword 
} from '../controllers/profileController.js';

const router = express.Router();

// Profile image routes
router.get('/profile-image/:email', getProfileImage);
router.put('/profile-image/:email', updateProfileImage);

// Phone number routes
router.get('/phone/:email', getPhoneNumber);
router.put('/phone/:email', updatePhoneNumber);



// Get user profile by email
router.get('/:email', getUserProfile);

// Update user name
router.put('/name/:email', updateUserName);

// Update user email
router.put('/email/:email', updateUserEmail);

// Update user password
router.put('/password/:email', updateUserPassword);
export default router;