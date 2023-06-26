import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <NavLink
          exact='true'
          to='/'
          className='navbar-logo'
          onClick={() => {
            isMenuOpen && toggleMenu();
          }}>
          <h1 className='navbar-logo'>DRIVE COMUNITY.</h1>
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
