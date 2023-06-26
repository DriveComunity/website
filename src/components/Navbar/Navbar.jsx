import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link className='navbar-logo' to={"/"}>
          <h1 className='navbar-logo'>DRIVE COMUNITY.</h1>
        </Link>
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
