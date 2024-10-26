import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentPage from './components/PaymentPage';
import StudentForm from './components/StudentForm';
import FeeSelectionPage from './components/FeeSelectionPage';
// import SignupPage from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import PortalPage from './components/PortalPage';
// import PrivateRoute from './components/PrivateRoute'; // Private route for secure form access
import ProgramApplyingFor from './components/ProgramApplyingFor';
import EducationalBackground from './components/EducationalBackground';
import GuardianDetails from './components/GuardianDetails';
import Home from './components/Home/HomePage';    

function App() {           
  return (  
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* <Route path="/form" element={<PrivateRoute component={StudentForm} />} /> Secure form */}
        <Route path='form' element={<StudentForm/>}/>
        <Route path="/fees-payment" element={<FeeSelectionPage />} />
        <Route path="/Program" element={<ProgramApplyingFor />} /> {/* Route for ProgramApplyingFor */}
        <Route path='/Background' element={<EducationalBackground/>}/>
        <Route path='/guardian' element={<GuardianDetails/>}/>
        {/* 
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/portal" element={<PrivateRoute component={PortalPage} />} /> Portal secured */}
      </Routes>
    </Router>
  );
}

export default App;
