import React from "react";
import "./projectStyle.css";
import { NavLink } from "react-router-dom";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/self-project/${index}`}>
      <div>
        <li className="project">
          <img src={img} alt={title} className="project__img" />
          <h3 className="project__title">{title}</h3>
        </li>
      </div>
    </NavLink>
  );
};

export default Project;
