import React from "react";
import "./btnGithubStyle.css";
import githubIcon from "./gitHub-black.svg";

const BtnGithub = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={githubIcon} alt="" />
        GitHub repo
      </a>
    </div>
  );
};

export default BtnGithub;
