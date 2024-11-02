import "../styles/project.css";

export default function Pssst() {
  return (
    <div className="project-page-container">
      <h1 className="project-heading pssst">
        Pssst!
        <br />
        The Smart Do Not Disturb Controller
      </h1>
      <object
        data={require("../images/arrow_down.svg").default}
        className="arrow-down"
      ></object>
      <div className="all-info">
        <h3 className="sub-heading">
          In today’s connected world, staying focused can be challenging when
          phones are buzzing with notifications. Pssst! is here to change that
          by providing an advanced and customizable approach to managing your
          phone’s Do Not Disturb settings. Tailored to help users silence their
          devices seamlessly based on specific needs. Pssst! offers a
          combination of time- and network-based muting options to ensure your
          phone is only loud when it needs to be.
        </h3>
        <img src={require("../images/pssst_icon.png")} className="image" />
        <h3 className="sub-heading">
          What Makes Pssst! Different? Unlike typical DND features, Pssst! gives
          users the flexibility to define silence based on context, such as
          being connected to a particular Wi-Fi network or at a certain time.
          Written in Java for Android devices, this app empowers users with
          precise control over their phone's notifications, allowing a more
          focused, distraction-free experience.
        </h3>

        <div className="list-and-image-container">
          <div className="list-container">
            <div>
              <h3 className="list-heading">Core Features:</h3>
              <ul>
                <li className="list-data">Network-Based DND Control</li>
                <li className="list-data">Scheduled DND</li>
              </ul>
            </div>
            <div>
              <h3 className="list-heading">Use cases</h3>
              <ul>
                <li className="list-data">Workplaces</li>
                <li className="list-data">Family Time</li>
                <li className="list-data">Events</li>
              </ul>
            </div>
          </div>
          <img
            src={require("../images/pssst_homepage.png")}
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
