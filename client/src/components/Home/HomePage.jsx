import Header from "../Header/HeaderPage";
import Navigation from "../Navigation/NavPage";
import LandingPage from "../landingPage/LandingPage"
import Footer from "../footer/Footer";
const HomePage = () => {
  return (
    <div>
      {/* == Header Section == */}
      <Header />

      {/* == Nav Section == */}
      <Navigation />

      {/* Landing PAGE Section == */}
      <LandingPage/>
      {/* == Footer Section == */}
      <Footer />
    </div>
  );
};

export default HomePage;
