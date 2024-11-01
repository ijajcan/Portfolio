import React from "react";
import "../styles/about.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="image-container">

      <div className="hex-bg-yellow"></div>
        <img src={require("../images/Home.png")} className="profile-image"></img>
      </div>
      <div className="about-me-text">
        <h1 className="heading">
          Hi, I'm <span>Ivan Jajcan</span>
        </h1>
        <p>
          I’m a software developer and designer with over 4 years of experience
          of developing and designing new technologies.
        </p>
        <p>
          For each project, I aim to push boundaries, combining creativity and
          functionality to enhance the user experience.
        </p>
        <p>
          The gym is my happy place, where I recharge and stay grounded, and I
          bring that energy back into my work.
        </p>
        <p>
          In both my fitness routine and my programming career, knowledge and
          determination are essential to success. Just as I train with a focus
          on consistency and progress, I approach design and development with
          the same dedication, sculpting every detail to build solutions that
          are efficient, functional, and enjoyable to use.
        </p>
      </div>
    </div>
  );
}