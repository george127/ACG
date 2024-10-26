import './HeaderPage.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
      <div className="logo">
        <img src="https://via.placeholder.com/150x50" alt="IT School Logo" />
      </div>
      <div className="site-title">
        <h1>IT School</h1>
        <p className="slogan">Shaping Tomorrows Tech Leaders</p>
      </div>
      <div className="header-contact">
        <p>Call Us: +123-456-7890</p>
        <p>Email: info@itschool.com</p>
      </div>
      </div>
    </header>
  );
};

export default Header;
