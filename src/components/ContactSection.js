import React from "react";
import "../styles/styles.css"

function ContactSection() {
  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <h3 className="contact-title">Let' s work together,</h3>
        <h3 className="contact-title">I' m just a click away.</h3>

        <p className="contact-text">
          I'm always looking for new opportunities and would love to hear from
          you. If you have any questions or would like to discuss a project
          together, please don't hesitate to get in touch.
        </p>

        <a className="link" href="#contact">
          <object data={require("../images/arrow.svg").default}></object>Get in touch
        </a>
      </div>

      <div className="hex-bg instance5"></div>
    </div>
  );
}

export default ContactSection;
