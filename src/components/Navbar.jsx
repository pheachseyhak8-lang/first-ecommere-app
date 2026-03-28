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
    <nav className="navbar">
      {/* LOGO */}
      <h2 className="logo">
        <Link to="/">
          <span className="emoji">🚘</span> SUPER CAR
        </Link>
      </h2>

      {/* OVERLAY (ចុចដើម្បីបិទ menu) */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* SIDEBAR MENU */}
      <div className={`nav-sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-header">
           <span className="close-btn" onClick={() => setOpen(false)}>←</span>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/service" onClick={() => setOpen(false)}>Service</Link></li>
          <li><Link to="/model" onClick={() => setOpen(false)}>Model</Link></li>
        </ul>

        <div className="sidebar-footer">
          {user ? (
            <div className="user-section">
              <p>Hello, <strong>{user.name}</strong></p>
              <button onClick={() => { logout(); setOpen(false); }} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)} className="login-link">Login</Link>
          )}
        </div>
      </div>

      {/* RIGHT SIDE (Desktop & Always Visible) */}
      <div className="nav-right">
        {/* Desktop User Info */}
        <div className="desktop-user">
          {user ? (
            <>
              <span className="welcome">Hi, {user.name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{totalQty}</span>
        </Link>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <span className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </span>
      </div>
    </nav>
  );
};

export default Navbar;