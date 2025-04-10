import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const myTechnologies = technologies.map((technologies, index) => {
    return <span key={index}>{technologies}</span>
  })


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>{myTechnologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
