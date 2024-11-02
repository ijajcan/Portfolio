import React from "react";
import "../styles/styles.css";
import ProjectContainer from "../components/ProjectContainer";

export default function ProjectsSection() {
  return (
    <div className="projects-container">
      <h3 className="section-title">Some of my favorite projects</h3>

      <div className="projects-grid-container">
        <ProjectContainer src="pssst_homepage.png" projectName="Pssst!" href="/pssst" />
        <ProjectContainer src="mycookbook.png" projectName="MyCookBook"  href="/mycookbook"/>
        <ProjectContainer src="gallery1.png" projectName="Gallery"  href="/gallery"/>
      </div>
    </div>
  );
}