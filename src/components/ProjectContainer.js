import { Link } from "react-router-dom";

export default function ProjectContainer(props) {
    
  return (
    <Link className="project-container" to={props.href}>
      <div>
        <img
          className="project-image"
          src={require(`../images/${props.src}`)}
          style={{ objectFit: props.projectName === "Pssst!" ? "contain" : "" }}
        />
      </div>
      <p>{props.projectName}</p>
    </Link>
  );
}
