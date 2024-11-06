import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
    <nav className={`${menuVisibility ? "nav-visible" : "nav-not-visible"}`}>
      <button
        className="toggleMenu"
        onClick={() => setMenuVisibility(!menuVisibility)}
      >
        ☰
      </button>
      <ul className={`navMenu ${menuVisibility ? "visible" : "not-visible"}`}>
        <li className="li-nav">
          <Link to="/">Home</Link>
        </li>
        <li className="li-nav">
          <Link to="/about">About</Link>
        </li>
        <li className="li-nav">
          <Link to="/work">Work</Link>
        </li>
        <li className="li-nav">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
