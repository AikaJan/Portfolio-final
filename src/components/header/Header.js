import React from "react";
import "./headerStyle.css";
import resume from "./Resume_Aigerim.D.2024.pdf";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Aigerim Dzhanyshpekova</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href={resume} className="btn" download="Resume_Aigerim_2024.pdf">
            Download CV
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
