import Header from '../Header/HeaderPage';
import Navigation from '../Navigation/NavPage';
import './HomePage.css'; // or './HomePage.module.css'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h2>Welcome to My Website!</h2>
    </div>
  );
};

export default HomePage;
