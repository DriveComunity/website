import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    window.scrollTo(0, 0);
  };
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <NavLink exact='true' to='/' className='navbar-logo' onClick={handleLogoClick}>
          <h1 className='navbar-logo'>DRIVE COMMUNITY.</h1>
        </NavLink>
        <div className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`} id='mobile-menu' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link className='nav-links' to={"/fordrivers"}>
              FOR DRIVERS
            </Link>
          </li>
          <li>
            <Link to={"/forpassengers"} rel='noopener noreferrer' className='nav-links'>
              FOR PASSENGERS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
