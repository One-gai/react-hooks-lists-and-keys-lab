import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItem = projects.map((projects) => {
    return <h3 key={projects.id}>{projects.name}</h3>
  
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItem}</div>
    </div>
  );
}

export default ProjectList;
