

import Students from '../models/Student.js';

// Controller to handle personal details
export const PersonalDetails = async (req, res) => {
  try {
    const { personalDetails } = req.body;
    const { email, fullName, phoneNumber, address, nationality, dob, gender } = personalDetails;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if a student already exists with the given email
    const existingStudent = await Students.findOne({ "personalDetails.email": email });

    if (existingStudent) {
      return res.status(400).json({
        message: 'A student with this email already exists'
      });
    }

    // Wait for 4 seconds before updating the student data in the database
    setTimeout(async () => {
      try {
        // Update the student's personal details, creating a new document if it doesn't exist
        const updatedStudent = await Students.findOneAndUpdate(
          { "personalDetails.email": email },
          { 
            personalDetails: { email, fullName, phoneNumber, address, nationality, dob, gender } 
          },
          { new: true, upsert: true } // Create if not exists
        );

        res.status(201).json({
          message: 'Personal details submitted successfully!',
          student: updatedStudent,
        });
      } catch (updateError) {
        res.status(500).json({ message: 'Error updating personal details', error: updateError.message });
      }
    }, 2000);

  } catch (error) {
    res.status(500).json({ message: 'Error submitting personal details', error: error.message });
  }
};

// Controller to handle program application details submission
export const ProgramApplyingFor = async (req, res) => {
  try {
    const { programApplyingFor } = req.body; // Destructure programApplyingFor
    const { programName, courseDetails } = programApplyingFor; // Extract programName and courseDetails

    // Check for any existing student with submitted personal details
    const existingStudent = await Students.findOne({ "personalDetails.email": { $exists: true, $ne: null } });

    // If no student found with submitted personal details
    if (!existingStudent) {
      return res.status(404).json({ message: 'No student found with submitted personal details. Please submit personal details first.' });
    }

    // Wait for 4 seconds before updating the student data in the database
    setTimeout(async () => {
      try {
        // Update the student's programApplyingFor details
        const updatedStudent = await Students.findOneAndUpdate(
          { "personalDetails.email": existingStudent.personalDetails.email }, // Use existing email for update
          { 
            programApplyingFor: { programName, courseDetails }
          },
          { new: true } // Update the existing student document
        );

        res.status(200).json({
          message: 'Program details submitted successfully!',
          student: updatedStudent,
        });
      } catch (updateError) {
        res.status(500).json({ message: 'Error updating program details', error: updateError.message });
      }
    }, 2000);

  } catch (error) {
    res.status(500).json({ message: 'Error submitting program details', error: error.message });
  }
};


// Controller to handle educational background submission
export const EducationalBackground = async (req, res) => {
  try {
    const { educationalBackground } = req.body; // Destructure educationalBackground from the request body
    const { qualification, institution, graduationYear, studyArea, certifications } = educationalBackground; // Extract individual fields

    // Check if the student has already submitted personal details
    const existingStudent = await Students.findOne({ "personalDetails.email": { $exists: true, $ne: null } });

    if (!existingStudent) {
      return res.status(404).json({ message: 'No student found with submitted personal details. Please submit personal details first.' });
    }

    // Wait for 4 seconds before updating the student's educational background details
    setTimeout(async () => {
      try {
        // Update the student's educational background details
        const updatedStudent = await Students.findOneAndUpdate(
          { "personalDetails.email": existingStudent.personalDetails.email }, // Use the existing email to update
          {
            educationalBackground: {
              qualification,
              institution,
              graduationYear,
              studyArea,
              certifications
            }
          },
          { new: true } // Update the existing student document
        );

        res.status(200).json({
          message: 'Educational background submitted successfully!',
          student: updatedStudent,
        });

      } catch (updateError) {
        res.status(500).json({ message: 'Error updating educational background', error: updateError.message });
      }
    }, 2000);

  } catch (error) {
    res.status(500).json({ message: 'Error submitting educational background', error: error.message });
  }
};


// Controller to handle guardian details submission
export const GuardianDetails = async (req, res) => {
  try {
    const { guardianDetails } = req.body; // Destructure guardianDetails from the request body
    const { guardianFullName, relationship, guardianPhone, guardianEmail, guardianOccupation } = guardianDetails; // Extract individual fields

    // Check if the student has already submitted personal details
    const existingStudent = await Students.findOne({ "personalDetails.email": { $exists: true, $ne: null } });

    // If no student found with submitted personal details
    if (!existingStudent) {
      return res.status(404).json({ message: 'No student found with submitted personal details. Please submit personal details first.' });
    }

    // Wait for 4 seconds before updating the student's guardian details
    setTimeout(async () => {
      try {
        // Update the student's guardian details
        const updatedStudent = await Students.findOneAndUpdate(
          { "personalDetails.email": existingStudent.personalDetails.email }, // Use the existing email to update
          {
            guardianDetails: {
              guardianFullName,
              relationship,
              guardianPhone,
              guardianEmail,
              guardianOccupation
            }
          },
          { new: true } // Update the existing student document
        );

        res.status(200).json({
          message: 'Guardian details submitted successfully!',
          student: updatedStudent,
        });

      } catch (updateError) {
        res.status(500).json({ message: 'Error updating guardian details', error: updateError.message });
      }
    }, 2000); 

  } catch (error) {
    res.status(500).json({ message: 'Error submitting guardian details', error: error.message });
  }
};
