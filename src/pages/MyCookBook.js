export default function MyCookBook() {
  return (
    <div className="project-page-container">
      <h1 className="project-heading mycookbook">
        MyCookBook
        <br />
        New age of cooking
      </h1>
      <object
        data={require("../images/arrow_down.svg").default}
        className="arrow-down"
      ></object>
      <div className="all-info">
        <h3 className="sub-heading">
          MyCookBook is an innovative Android app developed in Java that goes
          beyond being just a digital recipe book. it's a social platform where
          cooking meets community. Designed with both casual cooks and chefs in
          mind, MyCookBook offers users a space to explore, create, and share
          recipes while interacting with a global network of food entusiasts.
        </h3>

        <h3 className="sub-heading">
          Unlike traditional recipe apps, MyCookBook incorporates social media
          functionalities, creating a network where users can follow, message,
          and engage with others in their culinary creations. From leaving
          comments and sharing tips to saving favorites and receiving
          notifications, MyCookBook enhances cooking through community
          engagement and personalized features.
        </h3>
        <div className="all-project-text-container">
          <img
            src={require("../images/mycookbook_icon.png")}
            className="mycookbook-image"
          />

          <div className="project-text-container">
            <h3 className="sub-heading">Authentication & Security</h3>
            <p className="project-text">
              Powered by Firebase Authentication, users enjoy quick, secure
              login options via Google or Facebook, maintaining both ease of
              access and robust security.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Real-Time Data Management</h3>
            <p className="project-text">
              Database integration allows users to enjoy instant updates and a
              dynamic experience, whether they’re posting a new recipe or
              interacting with community content.
            </p>
          </div>
          <img
            src={require("../images/mycookbook_profile.png")}
            className="mycookbook-image"
          />
          <div className="project-text-container">
            <h3 className="sub-heading">Recipe Interaction</h3>
            <p className="project-text">
              Add comprehensive recipes, complete with images, ingredients, and
              step-by-step instructions. Edit or update recipes to keep them
              fresh and relevant comment on others' recipes and share tips. Like
              and dislike are essential features to promote interaction and
              feedback to maintain a respectful and safe environment.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Save and Share</h3>
            <p className="project-text">
              Save your favorite recipes to a personal collection for easy
              access and meal planning. Share recipes directly with friends or
              on social media platforms to showcase your latest finds or
              creations.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Detailed Search Filters</h3>
            <p className="project-text">
              Search by ingredients, difficulty level, cooking time, or dietary
              preferences to find exactly what you’re looking for.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Comments and Discussions</h3>
            <p className="project-text">
              commenting feature encourages interactive dialogues in which users
              can exchange tips, variations, or personal experiences with
              others.
            </p>
          </div>
          <img
            src={require("../images/mycookbook.png")}
            className="mycookbook-image"
          />
          <div className="project-text-container">
            <h3 className="sub-heading">Reporting and Safety</h3>
            <p className="project-text">
              Reporting options are in place to flag inappropriate or off-topic
              content, ensuring the community maintains a positive and helpful
              tone.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Customization & Personalization</h3>
            <p className="project-text">
              MyCookBook includes a host of customizable settings that adapt to
              individual user preferences.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Language Options</h3>
            <p className="project-text">
              Multi-language support broadens app's reach, allowing users from
              various regions to engage comfortably.
            </p>
          </div>
          <img
            src={require("../images/mycookbook_home.png")}
            className="mycookbook-image"
          />
          <div className="project-text-container">
            <h3 className="sub-heading">User Support</h3>
            <p className="project-text">
              A detailed FAQ section addresses common questions and app
              navigation tips. The feedback feature allows users to send
              suggestions or report issues, fostering an ever-improving
              platform.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Notifications and Alerts</h3>
            <p className="project-text">
              Push notifications keep users updated about new likes, comments,
              messages, and trending recipes within their network.
            </p>
          </div>
          <div className="project-text-container">
            <h3 className="sub-heading">Interactive Feeds</h3>
            <p className="project-text">
              A personalized feed shows the latest posts from users you follow
              and trending recipes, making discovery simple and engaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
