import React from "react";
import "../styles/styles.css"

function SkillsSection() {
  return (
    <div className="section-container2">
      <div className="wrapper">
        <div className="hex-bg-blue blue-instance4"></div>

        <div className="section-text-container2">
          <h3 className="section-title">
            What I do and how can I make your life easier
          </h3>

          <div className="skills-text-container">
            <p className="number">01</p>
            <p className="skill">UI/UX designer</p>
            <p className="use">
              Designs intuitive user interfaces and improves user experience by
              creating wireframes, prototypes, and conducting user testing.
            </p>
          </div>

          <div className="skills-text-container">
            <p className="number">02</p>
            <p className="skill">Mobile app developer</p>
            <p className="use">
              Builds mobile applications for iOS and Android platforms, ensuring
              functionality, performance, and seamless user interaction.
            </p>
          </div>

          <div className="skills-text-container">
            <p className="number">03</p>
            <p className="skill">Web developer</p>
            <p className="use">
              Develops responsive websites and web applications using front-end
              and back-end technologies to ensure functionality and aesthetics.
            </p>
          </div>

          <div className="skills-text-container">
            <p className="number">04</p>
            <p className="skill">Database manager</p>
            <p className="use">
              Maintains and optimizes databases by managing data storage,
              security, and backup, ensuring data integrity and accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
