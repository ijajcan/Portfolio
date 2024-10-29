import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import {Cursor} from 'react-simple-typewriter';

function Header() {
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showTextCursor, setShowTextCursor] = useState(false);
  const text = "Award winning software engineer";
  const name = "Ivan Jajcan";

  const [displayedName, setDisplayedName] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let nameIndex = 0;
    let textIndex = 0;

    const typeName = () => {
      if (nameIndex < name.length) {
        setDisplayedName(name.slice(0, nameIndex + 1));
        nameIndex++;
        setTimeout(typeName, 50);
      } else {
        setShowNameCursor(false);
        setShowTextCursor(true);
        typeText();
      }
    };

    const typeText = () => {
      if (textIndex < text.length) {
        setDisplayedText(text.slice(0, textIndex + 1));
        textIndex++;
        setTimeout(typeText, 50);
      } else {
        setShowTextCursor(false)
      }
    };

    typeName();
  }, []);

  return (
    <div>
      <div className="hex-bg-blue blue-instance1"></div>
      <div className="hex-bg-blue blue-instance2"></div>
      <div className="hex-bg.blue blue-instance3"></div>

      <div className="title-container">
        <div className="title-text-container">
          <h1 className="header-name">
            {displayedName}
            {showNameCursor && <Cursor />}
          </h1>
          <h1 className="header-text">
            {displayedText}
            {showTextCursor && <Cursor />}
          </h1>
        </div>
        <img
          className="profile"
          src={require("../images/profile.png")}
          alt="Profile Picture"
        />
      </div>
    </div>
  );
}

export default Header;
