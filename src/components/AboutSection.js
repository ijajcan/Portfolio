import React from "react";
import "../styles/styles.css"

function AboutSection() {
  return (
    <div className="section-container1">
    <div className="wrapper">
      <div className="hex-bg-blue blue-instance4"></div>

      <div className="section-text-container1">
        <h3 className="section-title">
          My programing and design journey started with a passion for creating
          new visual experiences and intuitive user interfaces.
        </h3>
        <div>
          <div className="section-text">
            <p>
              Driven by my desire to continuously improve my skills, knowledge
              and user interaction with technology. I aim to develop experience
              that is both user-friendly and easy to use.
            </p>

            <p>
              When I' m not developing or designing new software, I can be found
              in the kitchen experimenting with the recipes I have never tried
              before.
            </p>
          </div>

          <a className="link" href="/about">
          <object data={require("../images/arrow.svg").default}></object>
            About me
          </a>

          <div className="section-info">
            <div>
              <h3 className="number-label">Awards and certifications</h3>
              <p className="number">6+</p>
            </div>
            <div>
              <h3 className="number-label">Years of experience</h3>
              <p className="number">4+</p>
            </div>
            <div>
              <h3 className="number-label">Clients served</h3>
              <p className="number">20+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutSection;
