import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentPage from "./components/PaymentPage";
import StudentForm from "./components/StudentForm";
import FeeSelectionPage from "./components/FeeSelectionPage";
import SignupPage from "./components/SignUpPage";
import LoginPage from "./components/logInPage";
import StudentPortal from "./components/StudentPortal/StudentPortal";
import PrivateRoute from "./components/PrivateRoute"; 
import ProgramApplyingFor from "./components/ProgramApplyingFor";
import EducationalBackground from "./components/EducationalBackground";
import GuardianDetails from "./components/GuardianDetails";
import Home from "./components/Home/HomePage";
import Software from "./components/Pages/Software";
import Aws from "./components/Pages/Aws";
import Azure from "./components/Pages/Azure";
import Marketing from "./components/Pages/DigitalMarketing";
import DataAnalytics from "./components/Pages/DataAnalytics";
import MicrosoftAz500 from "./components/Pages/MicrosoftAz500";
import Oscp from "./components/Pages/Oscp";
import ForexTrading from "./components/Pages/ForexTrading";

// == Importions for Software Engineering pages ==
import FrontDetails from "./components/Pages/1.frontDetails";
import BackendDetails from "./components/Pages/2.BackendDetails";
import MobileDetails from "./components/Pages/3.MobileDetails";
import NextJsDetails from "./components/Pages/4.NextJsDetails";
import FlutterDetails from "./components/Pages/5.FlutterDetails";
import JavascriptDetails from "./components/Pages/6.JavascriptDetails";
import TypescriptDetails from "./components/Pages/7.TypescriptDetails";

//  == Importions for Cloud Engineering pages ==
import AWSSAProDetails from "./components/Pages/8.AWS-SA-Pro-Details";
import AWSSAAssociateDetails from "./components/Pages/9.AWS-SA-Associate-Details";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* <Route path="/form" element={<PrivateRoute component={StudentForm} />} /> Secure form */}
        <Route path="form" element={<StudentForm />} />
        <Route path="/fees-payment" element={<FeeSelectionPage />} />
        <Route path="/Program" element={<ProgramApplyingFor />} />{" "}
        {/* Route for ProgramApplyingFor */}
        <Route path="/Background" element={<EducationalBackground />} />
        <Route path="/guardian" element={<GuardianDetails />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/StudentPortal"
          element={
            <PrivateRoute>
              <StudentPortal />
            </PrivateRoute>
          }
        />
        <Route path="/Software" element={<Software />} />
        <Route path="/Aws" element={<Aws />} />
        <Route path="/Azure" element={<Azure />} />
        <Route path="/Marketing" element={<Marketing />} />{" "}
        <Route path="/DataAnalytics" element={<DataAnalytics />} />
        <Route path="/MicrosoftAz" element={<MicrosoftAz500 />} />
        <Route path="/Oscp" element={<Oscp />} />
        <Route path="/forexTrading" element={<ForexTrading />} />

        {/* Routes for Software Engineering pages */}
        <Route path="/Software/frontDetails" element={<FrontDetails />} />
        <Route path="/Software/backendDetails" element={<BackendDetails />} />
        <Route path="/Software/mobileDetails" element={<MobileDetails />} />
        <Route path="/Software/nextJsDetails" element={<NextJsDetails />} />
        <Route path="/Software/flutterDetails" element={<FlutterDetails />} />
        <Route path="/Software/javascriptDetails" element={<JavascriptDetails />} />
        <Route path="/Software/typescriptDetails" element={<TypescriptDetails />} />

        {/* Routes for Cloud Computing pages */}
        <Route path="/Aws/AWS-SA-Pro-Details" element={<AWSSAProDetails />} />
        <Route path="/Aws/AWS-SA-Associate-Details" element={<AWSSAAssociateDetails />} />


      </Routes>
    </Router>
  );
}

export default App;
