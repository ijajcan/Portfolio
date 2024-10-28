import React, { useState } from "react";
import "../styles/styles.css";

function Navigation() {
  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
    <nav className={`${menuVisibility ? "nav-visible" : "nav-not-visible"}`} >
      <button className="toggleMenu" onClick={() => setMenuVisibility(!menuVisibility)}>
        ☰
      </button>
      <ul className={`navMenu ${menuVisibility ? "visible" : "not-visible"}`} >
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
