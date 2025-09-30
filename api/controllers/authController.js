import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Student from "../models/Student.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';

dotenv.config(); // Load environment variables

// Generate Access Token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Generate Refresh Token
const generateRefreshToken = (id) =>
  jwt.sign({ id }, process.env.REFRESH_SECRET, { expiresIn: "7d" });
 
// User SignUp
export const SignUp = async (req, res) => {
  const { name, email, password } = req.body; // Updated field names to match front-end

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Generate a unique student ID
    const studentId = `STU-${uuidv4().split("-")[0].toUpperCase()}`; // Example: STU-1A2B3C

    // Create and save user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      studentId,
    });

    // Generate tokens
    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Optionally save refresh token in DB 
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      message: "User created successfully", 
      token,
      refreshToken,
      studentId,
    });
  } catch (error) {
    console.error("SignUp Error:", error.message || error);
    res.status(500).json({ message: "Server error" });
  }
};

// User LogIn
// export const LogIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid Email" });

//     // Compare password
//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

//     // Generate tokens
//     const token = generateToken(user._id);
//     const refreshToken = generateRefreshToken(user._id);

//     // Save refresh token in DB 
//     user.refreshToken = refreshToken;
//     await user.save();

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       refreshToken,
//       user: { name: user.name, email: user.email, studentId: user.studentId, }, // Include user details
//     });
//   } catch (error) {
//     console.error("LogIn Error:", error.message || error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// In your login controller
export const LogIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Email" });
    
    // Check if account is active
    if (!user.isActive) return res.status(400).json({ message: "Account is deactivated" });

    // Compare password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    // Generate tokens
    const token = generateToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save refresh token in DB 
    user.refreshToken = refreshToken;
    await user.save();

    // Prepare user response
    const userResponse = {
      name: user.name, 
      email: user.email, 
      role: user.role
    };
    
    // Add studentId only for students
    if (user.role === 'student') {
      userResponse.studentId = user.studentId;
    }

    res.status(200).json({
      message: "Login successful",
      token,
      refreshToken,
      user: userResponse,
    });
  } catch (error) {
    console.error("LogIn Error:", error.message || error);
    res.status(500).json({ message: "Server error" });
  }
};

export const checkAuthStatus = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      }); 
    }

    const student = await Student.findOne({ 
      'personalDetails.email': email 
    });
 
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.status(200).json({
      success: true,
      user: {
        fullName: student.personalDetails.fullName,
        email: student.personalDetails.email,
        profileImage: student.personalDetails.profileImage
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};   


// initialization script
const createDefaultAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin@appcode.com" });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("Admin@1234", salt);
      
      await User.create({
        name: "System Administrator",
        email: "admin@appcode.com",
        password: hashedPassword,
        role: "admin"
      });
      console.log("Default admin account created");
    }
  } catch (error) {
    console.error("Error creating default admin:", error);
  }
};

// Call this function when your server starts
createDefaultAdmin();