import React from "react";
import "../styles/styles.css"

function ProjectsSection() {
  return (
    <div className="projects-container">
      <h3 className="section-title">Some of my favorite projects</h3>

      <div className="projects-grid-container">
        <a className="project-container" href="./Pssst">
          <div>
            <img className="project-image" src={require("../images/pssst_homepage.png")} style={{objectFit: "contain"}}/>
          </div>
          <p>Pssst!</p>
        </a>
        <a className="project-container" href="./MyCookBook">
          <div>
            <img className="project-image" src={require("../images/MyCookBook.png")} />
          </div>
          <p>MyCookBook</p>
        </a>
        <a className="project-container" href="./Gallery">
          <div>
            <img className="project-image" src={require("../images/gallery1.png")} />
          </div>
          <p>Gallery</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;
