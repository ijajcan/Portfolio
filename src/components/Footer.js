import React from "react";
import "../styles/styles.css";

function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <h4>Have you seen enough?</h4>
        <p>Reach out if you want to work with me</p>
      </div>
      <div className="footer-links">
        <h4>Location</h4>
        <p>Currently located in stunning part of Croatia</p>
        <br />
        <br />

        <h4>Social</h4>
        <a href="https://www.instagram.com/ijajcan/">
          <object data={require("../images/arrow.svg").default}></object>
          Instagram
        </a>
        <a href="https://www.facebook.com/ivan.jajcan">
          <object data={require("../images/arrow.svg").default}></object>
          Facebook
        </a>
        <a href="https://www.linkedin.com/in/ivan-jajcan-41152a29b/">
          <object data={require("../images/arrow.svg").default}></object>
          LinkedIn
        </a>
        <a href="https://github.com/ijajcan">
          <object data={require("../images/arrow.svg").default}></object>GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
