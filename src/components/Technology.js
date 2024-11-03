import "../styles/technology.css";
export default function Technology(props) {
  return (
    <div className="technology-container">
        <img
          src={require("../images/technologies/" + props.technologyImage)}
          style={{backgroundColor: props.technologyColor}}
          className="technology-image"
        />
      <div className="technology-text-container">
        <p className="technology-name">{props.technologyName}</p>
        <p className="technology-description">{props.technologyDescription}</p>
      </div>
    </div>
  );
}
