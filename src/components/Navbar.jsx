import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="navbar">
      {/* LOGO */}
      <h2 className="logo">
        <Link to="/"><span className="emoji">🚘</span> SUPER CAR</Link>
      </h2>

      {/* MENU */}
      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/model">Model</Link></li>

        {/* MOBILE EXTRA */}
        <div className="mobile-extra">
          {user ? (
            <>
              <span className="mobile-user">Hello, {user.name}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <button onClick={toggleTheme}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {user ? (
          <>
            <span className="welcome">Hello, {user.name}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}

        <Link to="/cart" className="Cart">
          🛒 <span className="cart-count">{totalQty}</span>
        </Link>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <span className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </span>

      </div>
    </div>
  );
};

export default Navbar;