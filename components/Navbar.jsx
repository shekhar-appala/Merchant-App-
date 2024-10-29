/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-2">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarTogglerDemo03"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <img alt="/" src="./bell.png" />
      </a>

      <div className={`collapse navbar-collapse  ${isOpen ? 'show' : ''}`} id="navbarTogglerDemo03">
        <ul className=" nav-list navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item">
            <a className="nav-link" href="/medialibraries">Media libraries</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              Securities
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Terms and conditions   </a>
              <a className="dropdown-item" href="#">Privacy and policies</a>
              <a className="dropdown-item" href="#">Return and refund</a>
              <a className="dropdown-item" href="#">Cancellation policies</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Upgrade Plan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Version</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
