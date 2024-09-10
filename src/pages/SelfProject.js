import React from "react";
import { useParams } from "react-router-dom";
import BtnGithub from "../components/btnGithub/BtnGithub";
import { projects } from "../helpers/projectList";
import Repos from "../components/repos/Repos";

const SelfProject = () => {
  const { id } = useParams();
  const projectId = projects[id];

  return (
    <div>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{projectId.title}</h1>
            <img
              src={projectId.imgBig}
              alt={projectId.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p> Skills: {projectId.skills}</p>
            </div>

            {projectId.gitHubLink && <BtnGithub link={projectId.gitHubLink} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelfProject;
