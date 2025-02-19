import mongoose from "mongoose";
const DetailsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    modeOfTraining: String,
    courseDate: String,
    courseTime: String,
    participants: Number,
    sponsorship: String,
    certificateName: String,
  },
  { timestamps: true }
);

const Details = mongoose.model("Details", DetailsSchema);

export default Details;
