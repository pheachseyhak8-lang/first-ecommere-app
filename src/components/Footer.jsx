import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo / About */}
        <div className="footer-section">
          <h2>SuperCar 🚗</h2>
          <p>Luxury cars for your lifestyle.</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: PheachSeyhak@gmail.com</p>
          <p>Phone: +855 71 45 68 013</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SuperCar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;