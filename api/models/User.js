// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   studentId: { type: String, unique: true },
//   refreshToken: { type: String }, // Optional field for storing refresh tokens
// });

// // Compare entered password with hashed password
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', UserSchema);  

// export default User;



import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// In your User model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  studentId: { type: String, unique: true, sparse: true },
  refreshToken: { type: String },
  role: { 
    type: String, 
    enum: ['student', 'admin'], 
    default: 'student' 
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });


// Compare entered password with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);  

export default User;


  