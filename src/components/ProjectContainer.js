export default function ProjectContainer(props) {
    
  return (
    <a className="project-container" href={props.href}>
      <div>
        <img
          className="project-image"
          src={require(`../images/${props.src}`)}
          style={{ objectFit: props.projectName === "Pssst!" ? "contain" : "" }}
        />
      </div>
      <p>{props.projectName}</p>
    </a>
  );
}
