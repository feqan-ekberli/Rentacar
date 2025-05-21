import logo from "../../assets/whitelogo.png";
import "./Header.scss";
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className="header">
      <div className="right-section  gradient-bg">
        <div className="contact-phone">
          <FaPhoneAlt />
          <span className="contact-number">055 456 77 88</span>
        </div>
        <div className="social-box">
          <FaInstagram className="social-icon" />
          <FaFacebook className="social-icon" />
          <FaWhatsapp className="social-icon" />
        </div>
      </div>
      <div className="header-container ">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="left-section  ">
          <nav className="menu sm:flex ">
            <Link to="/">Əsas səhifə</Link>
            <Link to="/masinlar">Masinlar </Link>
            <Link to="/haqqimizda">Haqqimizda</Link>
            <Link to="/elaqe">Elaqe</Link>
            <Link to="teklifler">Teklifler</Link>
          </nav>
        </div>
        <div className="contact-btn">
          <button className="gradient-bg btn" type="button">
            Elaqe
          </button>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <nav className="menu sm:flex ">
          <Link to="/">Əsas səhifə</Link>
          <Link to="/masinlar">Masinlar </Link>
          <Link to="/haqqimizda">Haqqimizda</Link>
          <Link to="/elaqe">Elaqe</Link>
          <Link to="teklifler">Teklifler</Link>
        </nav>
      )}
    </header>
  );
};
export default Header;
