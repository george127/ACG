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
import FrontDetails from "./components/Pages/1.SE/1.frontDetails";
import BackendDetails from "./components/Pages/1.SE/2.backendDetails";
import MobileDetails from "./components/Pages/1.SE/3.MobileDetails";
import NextJsDetails from "./components/Pages/1.SE/4.NextJsDetails";
import FlutterDetails from "./components/Pages/1.SE/5.FlutterDetails";
import JavascriptDetails from "./components/Pages/1.SE/6.JavascriptDetails";
import TypescriptDetails from "./components/Pages/1.SE/7.TypescriptDetails";

// == Importions for Cloud Engineering pages ==
import AWSSAProDetails from "./components/Pages/2.CE/1.AWS-SA-Pro-Details";
import AWSSAAssociateDetails from "./components/Pages/2.CE/2.AWS-SA-Associate-Details";
import AWSysOpsDetails from "./components/Pages/2.CE/3.Aws-Sys-Ops-Details";
import AWSDevEnDetails from "./components/Pages/2.CE/4.AWS-Dev-En-Pro-Details";
import AWSDevAssociateDetails from "./components/Pages/2.CE/5.AWS-Dev-Associate-Details";
import AWSSerDetails from "./components/Pages/2.CE/6.AWS-SS-Details";
import AWSAdNetDetails from "./components/Pages/2.CE/7.Aws-Ad-Net-Details";
import AWSBiDataDetails from "./components/Pages/2.CE/8.AWS-Bi-Data-Details";
// == Importions for Azure ==
import AzureFundDetails from "./components/Pages/2.CE/9.Azure-Fund-Details";
import AzureADetails from "./components/Pages/2.CE/10.Azure-A-Details";
import AzureSeComFunDetails from "./components/Pages/2.CE/11.Azure-Se-Com-Fun-Details";
import AzureDataEnDetails from "./components/Pages/2.CE/12.Azure-Data-En-Details";
import AzureDataSSDetails from "./components/Pages/2.CE/13.Azure-Designing-Data-S-S";
import AzureARDMicroDetails from "./components/Pages/2.CE/14.Azure-A-R-D-Micro-Details";
import AzureDSMicroDetails from "./components/Pages/2.CE/15.Azure-D-S-Micro-Details";
import AzureIESASPowerBIDetails from "./components/Pages/2.CE/16.Azure-I-E-S-A-S-Power-BI-Details";
import AzureDesImpleMicroANSDetails from "./components/Pages/2.CE/17.Des-Imple-Micro-A-N-S.Details";
import AzureMicroSecTechDetails from "./components/Pages/2.CE/18.Micro-Azure-Sec-Tech.Details";
import AzureMicroIAAdDetails from "./components/Pages/2.CE/19.Micro-I-A-Ad.Details";
import AzureMicroSecOpADetails from "./components/Pages/2.CE/20.Azure-Micro-Sec-Op-A.Details";
import AzureAdWSeHyCoInfDetails from "./components/Pages/2.CE/21.Azure-Ad-W-Se-Hy-Co-Inf.Details";
import AzureCOpMicroVDeskDetails from "./components/Pages/2.CE/22.Azure-C-Op-Micro-V-Desk.Details";
import AzureDesMicroAISDetails from "./components/Pages/2.CE/23.Des-Micro-A-I-S";
import AzureMicroCyberArchDetails from "./components/Pages/2.CE/24.Azure-Micro-Cyber-Arch.Details";
import AzureDesIMicroDevSDetails from "./components/Pages/2.CE/25.Des-I-Micro-Dev-S.Details";

// == Importions for Digital Marketing ==
import Facebook from "./components/Pages/3.DM/1.facebook";
import Instagram from "./components/Pages/3.DM/2.Instagram";
import LinkedIn from "./components/Pages/3.DM/3.LinkedIn";
import Twitter from "./components/Pages/3.DM/4.Twitter";
import YouTube from "./components/Pages/3.DM/5.YouTube";
import GoogleAds from "./components/Pages/3.DM/6.Google-Ads";
import Pinterest from "./components/Pages/3.DM/7.Pinterest"; 
import TikTok from "./components/Pages/3.DM/8.TikTok"; 

// == Data Analytics ==
import CloudDataAnalytics from "./components/Pages/4.DA/1.CloudDataAnalytics";
import TraditionalDataAnalytics from "./components/Pages/4.DA/2.TraditionalDataAnalytics";

// == Cyber Security ==
import CyberSecurity from "./components/Pages/5.CS/Micro-AZ-500 Sec-Tra";
import OffSecuCertified from "./components/Pages/5.CS/Off-Secu-Certified-Pro";

// == Forex Trading ==
import Forex from "./components/Pages/6.FT/Forex";

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
        <Route path="/Aws/AWS-Sys-Ops-Details" element={<AWSysOpsDetails />} />
        <Route path="/Aws/AWS-Dev-En-Pro-Details" element={<AWSDevEnDetails />} />
        <Route path="/Aws/AWS-Dev-Associate-Details" element={<AWSDevAssociateDetails />} />
        <Route path="/Aws/AWS-SS-Details" element={<AWSSerDetails />} />
        <Route path="/Aws/AWS-Ad-Net-Details" element={<AWSAdNetDetails />} />
        <Route path="/Aws/AWS-Bi-Data-Details" element={<AWSBiDataDetails />} />
        {/* Cloud Azure */}
        <Route path="/Azure/Azure-Fund-Details" element={<AzureFundDetails />} />
        <Route path="/Azure/Azure-A-Details" element={<AzureADetails />} />
        <Route path="/Azure/Azure-Se-Com-Fun-Details" element={<AzureSeComFunDetails />} />
        <Route path="/Azure/Azure-Data-En-Details" element={<AzureDataEnDetails />} />
        <Route path="/Azure/Azure-Data-S-S-Details" element={<AzureDataSSDetails />} />
        <Route path="/Azure/Azure-A-R-D-Micro-Details" element={<AzureARDMicroDetails />} />
        <Route path="/Azure/Azure-D-S-Micro-Details" element={<AzureDSMicroDetails />} />
        <Route path="/Azure/Azure-I-E-S-A-S-Power-BI-Details" element={<AzureIESASPowerBIDetails />} />
        <Route path="/Azure/Azure-Des-Imple-Micro-A-N-S-Details" element={<AzureDesImpleMicroANSDetails />} />
        <Route path="/Azure/AzureMicro-Sec-Tech-Details" element={<AzureMicroSecTechDetails />} />
        <Route path="/Azure/Micro-I-A-Ad-Details" element={<AzureMicroIAAdDetails />} />
        <Route path="/Azure/Micro-Sec-Op-A-Details" element={<AzureMicroSecOpADetails />} />
        <Route path="/Azure/Ad-W-Se-Hy-Co-Inf-Details" element={<AzureAdWSeHyCoInfDetails />} />
        <Route path="/Azure/C-Op-Micro-V-Desk.Details" element={<AzureCOpMicroVDeskDetails />} />
        <Route path="/Azure/Des-Micro-A-I-S.Details" element={<AzureDesMicroAISDetails />} />
        <Route path="/Azure/Micro-Cyber-Arch.Details" element={<AzureMicroCyberArchDetails />} />
        <Route path="/Azure/Des-I-Micro-Dev-S.Details" element={<AzureDesIMicroDevSDetails />} />

        {/* Routes for Digital Marketing */}
        <Route path="/Marketing/Facebook" element={<Facebook />} />
        <Route path="/Marketing/Instagram" element={<Instagram />} />
        <Route path="/Marketing/LinkedIn" element={<LinkedIn />} />
        <Route path="/Marketing/Twitter" element={<Twitter />} />
        <Route path="/Marketing/YouTube" element={<YouTube />} />
        <Route path="/Marketing/Google-Ads" element={<GoogleAds />} />
        <Route path="/Marketing/Pinterest" element={<Pinterest />} />
        <Route path="/Marketing/TikTok" element={<TikTok />} />

        {/* Routes for Data Analytics */}
        <Route path="/DataAnalytics/CloudDataAnalytics" element={<CloudDataAnalytics />} />
        <Route path="/DataAnalytics/TraditionalDataAnalytics" element={<TraditionalDataAnalytics />} />


        {/* Routes for Cyber Security */}
        <Route path="/CyberSecurity/Micro-AZ-500-Sec-Tra" element={<CyberSecurity />} />
        <Route path="/CyberSecurity/Off-Secu-Certified-Pro" element={<OffSecuCertified />} />

        {/* Routes for Forex Trading */}
        <Route path="/ForexTrading/Forex-Trading" element={<Forex />} />
        
      </Routes>
    </Router>
  );
}

export default App;
