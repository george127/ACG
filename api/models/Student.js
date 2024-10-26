import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  personalDetails: {
    fullName: { type: String, required: true }, // Ensure fullName is required
    email: { type: String, unique: true, required: true }, // Make email unique and required
    phoneNumber: { type: String, required: true }, // Ensure phoneNumber is required
    address: { type: String, required: true }, // Ensure address is required
    nationality: { type: String, required: true }, // Ensure nationality is required
    dob: { type: Date, required: true }, // Date of birth field
    gender: { 
      type: String, 
      enum: ['male', 'female', 'other'], // Restrict to specific values
      required: true // Ensure gender is required
    } // Gender field
  },
  programApplyingFor: {
    programName: String,  
    courseDetails: String
  },  
  educationalBackground: { 
    qualification: String,
    institution: String,
    graduationYear: Number,
    studyArea: String,
    certifications: String
  },
  guardianDetails: {
    guardianFullName: String,
    relationship: String,
    guardianPhone: String,
    guardianEmail: String,
    guardianOccupation: String
  }
});

export default mongoose.model('studentsForm', studentSchema);
