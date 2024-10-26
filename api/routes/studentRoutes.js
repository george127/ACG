import express from 'express';
import { PersonalDetails, ProgramApplyingFor,  EducationalBackground,  GuardianDetails} from '../controllers/studentController.js';


const router = express.Router();

// Routes for each form section
router.post('/personalDetails', PersonalDetails);
router.post('/programApplyingFor', ProgramApplyingFor);
router.post('/educationalBackground', EducationalBackground);
router.post('/guardianDetails', GuardianDetails);

export default router;
