import Details from "../models/Details.js";

export const DetailsInfo = async (req, res) => {
  try {
    const {
      email,
      modeOfTraining,
      courseDate,
      courseTime,
      participants,
      sponsorship,
      certificationName,
    } = req.body;

    const existingUser = await Details.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newRegistration = new Details({
      email,
      modeOfTraining,
      courseDate,
      courseTime,
      participants,
      sponsorship,
      certificationName,
    });

    await newRegistration.save();
    res
      .status(201)
      .json({ message: "Registration successful", data: newRegistration });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};
