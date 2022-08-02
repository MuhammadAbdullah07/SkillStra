import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav" id="navbar">
      <a href="#intro" className="nav__brand">
        <span className="brandSpan">SKILL</span>STRA
      </a>

      <ul className={active}>
        <li className="nav__item">
          <a href="#intro" className="nav__link">
            Home
          </a>
        </li>

        <li className="nav__item">
          <a href="#aboutus" className="nav__link">
            About Us
          </a>
        </li>

        <li className="nav__item">
          <a href="#courses" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#eventreg" className="nav__link">
            Events
          </a>
        </li>
        <li className="nav__item">
          <a href="#regpool" className="nav__link">
            Register
          </a>
        </li>
        <li className="nav__item">
          <a href="#team" className="nav__link">
            Our Team
          </a>
        </li>
        {/*
        <li className="nav__item">
          <a href="#testimonials" className="nav__link">
            Testimonials
          </a>
        </li>
        */}
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
