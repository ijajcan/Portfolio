import React, {useRef} from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser"

function ContactForm() {
  const form = useRef()
  function sendMessage(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    console.log("Email:", email);
    console.log("Message:", message);
    
    emailjs.sendForm('service_lb1tj9i', 'template_agcwtgq', form.current, 'vOvPBUjODt0HuuMfT')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="contact-form">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
      <div className="text">
        <h1 className="heading">Contact Me</h1>
        <object
          data={require("../images/plane.svg").default}
          className="plane"
          aria-label="Plane Icon"
        ></object>
      </div>
      <form ref={form} className="form-container" onSubmit={sendMessage}>
        <div className="form">
          <span className="inline">
            <label htmlFor="emailInput">From: </label>
            <input
              type="email"
              required
              placeholder="..."
              id="emailInput"
              name="email"
            />
          </span>
          <span className="inline">
            <p>To: ijajcan@gmail.com</p>
          </span>
          <textarea
            id="messageInput"
            placeholder="Enter your message here..."
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
