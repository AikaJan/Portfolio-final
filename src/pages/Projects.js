import React from "react";
import Project from "../components/project/Project";

import { projects } from "./../helpers/projectList";
import SelfProject from "./SelfProject";

const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>

          <ul className="projects">
            {projects.map((i, index) => {
              return (
                <Project
                  key={index}
                  title={i.title}
                  img={i.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
