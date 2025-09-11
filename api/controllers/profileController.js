import Student from '../models/Student.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
// Get student profile image
export const getProfileImage = async (req, res) => {
  try {
    const { email } = req.params;
    
    const student = await Student.findOne({ 
      "personalDetails.email": email 
    });
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Student not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      profileImage: student.personalDetails.profileImage
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Update profile image
export const updateProfileImage = async (req, res) => {
  try {
    const { email } = req.params;
    const { profileImage } = req.body; 
    
    if (!profileImage) {
      return res.status(400).json({ 
        success: false, 
        message: 'Profile image is required' 
      });
    }
    
    const student = await Student.findOneAndUpdate(
      { "personalDetails.email": email },
      { "personalDetails.profileImage": profileImage },
      { new: true, runValidators: true }
    );
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Student not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Profile image updated successfully',
      profileImage: student.personalDetails.profileImage
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

export const getPhoneNumber = async (req, res) => {
  try {
    const { email } = req.params;
    
    const student = await Student.findOne({ 
      "personalDetails.email": email 
    });
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Student not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      phone: student.personalDetails.phone
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

export const updatePhoneNumber = async (req, res) => {
  try {
    const { email } = req.params;
    const { phone } = req.body;
    
    if (!phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone number is required' 
      });
    }
    
    const student = await Student.findOneAndUpdate(
      { "personalDetails.email": email },
      { "personalDetails.phone": phone },
      { new: true, runValidators: true }
    );
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Student not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Phone number updated successfully',
      phone: student.personalDetails.phone
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
}; 



// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const { email } = req.params;
    
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    // Return user data without password
    const userData = {
      name: user.name,
      email: user.email,
      studentId: user.studentId
    };
    
    res.status(200).json({
      success: true,
      user: userData
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Update user name
export const updateUserName = async (req, res) => {
  try {
    const { email } = req.params;
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name is required' 
      });
    }
    
    const user = await User.findOneAndUpdate(
      { email },
      { name },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Name updated successfully',
      name: user.name
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Update user email
export const updateUserEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const { newEmail } = req.body;
    
    if (!newEmail) {
      return res.status(400).json({ 
        success: false, 
        message: 'New email is required' 
      });
    }
    
    // Check if new email already exists
    const existingUser = await User.findOne({ email: newEmail });
    if (existingUser && existingUser.email !== email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already in use' 
      });
    }
    
    const user = await User.findOneAndUpdate(
      { email },
      { email: newEmail },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Email updated successfully',
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Update user password
export const updateUserPassword = async (req, res) => {
  try {
    const { email } = req.params;
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password and new password are required' 
      });
    }
    
    if (newPassword.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 6 characters' 
      });
    }
    
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    // Check current password
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password is incorrect' 
      });
    }
    
    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    user.password = hashedPassword;
    await user.save();
    
    res.status(200).json({
      success: true,
      message: 'Password updated successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};