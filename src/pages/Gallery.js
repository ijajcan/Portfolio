export default function Gallery() {
  return (
    <div className="project-page-container">
  <h1 className="project-heading gallery">Gallery</h1>
      <object
        data={require("../images/arrow_down.svg").default}
        className="arrow-down"
      ></object>
      <div className="all-info">
        <h3 className="sub-heading">
          In this project, I took on the design and development of a custom
          gallery website to showcase a collection of photos that client had
          taken during their trip to Germany. This site was meticulously built
          ensuring that every aspect of the user's experience was thoughtfully
          considered and optimized for engagement and usability.
        </h3>

        <img
          className="gallery-image"
          src={require("../images/gallery3.png")}
        />
        <h3 className="sub-heading">
          The gallery website was designed to be more than just a static page;
          it provides an immersive experience that allows users to relive the
          journey through different visual narratives. To enhance the
          organization and storytelling, I incorporated multiple albums within
          the gallery. Each album represents a unique segment of the trip, such
          as visits to historical landmarks, cityscapes, natural landscapes, and
          cultural events. This structure not only makes the gallery more
          navigable but also gives client the opportunity to explore specific
          themes.
        </h3>

        <img
          className="gallery-image"
          src={require("../images/gallery1.png")}
        />

        <h3 className="sub-heading">
          One of the key interactive features of the website is its pop-up
          functionality for image viewing. Using JavaScript, I implemented a
          lightbox effect that enables users to click on an image and have it
          enlarge. This feature allows for detailed viewing, complete with
          navigation arrows to move seamlessly between photos in an album
          without returning to the main page. The pop-ups are designed to be
          responsive and include subtle transitions and fade effects, enhancing
          the overall browsing experience.
        </h3>

        <h3 className="sub-heading">
          Responsive design was an essential part of this project. The gallery
          adjusts to different screen sizes, ensuring users on
          desktops, tablets, and smartphones all receive the same high-quality
          experience. CSS was used extensively to create fluid grids and
          adaptive elements, so the site looks polished and performs well
          regardless of the device. Each album and image tile was carefully
          styled to maintain a consistent and visually appealing layout that
          prioritizes the images themselves.
        </h3>

        <img
          className="gallery-image vertical"
          src={require("../images/gallery4.png")}
        />

        <h3 className="sub-heading">
          To add to the interactivity, I included features such as hover
          animations for images, where a slight zoom or shadow effect indicates
          that an image can be clicked to view in the pop-up. This small but
          impactful touch helps guide users intuitively through the website. CSS
          transitions were also employed to create smooth hover states and to
          enhance user feedback as they explore different elements of the page.
        </h3>

        <img
          className="gallery-image"
          src={require("../images/gallery2.png")}
        />

        <h3 className="sub-heading">
          The website's navigation was built with simplicity and
          user-friendliness in mind. A header menu allows users to jump between
          different albums, while a sticky back-to-top button makes it easy to
          return to the top of the page after exploring an album in-depth. This
          structured approach ensures that the browsing experience is both
          enjoyable and straightforward, making it easy for users to focus on
          the rich visual content.
        </h3>
      </div>
    </div>
  );
}
