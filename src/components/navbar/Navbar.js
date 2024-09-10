import React from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./navbarStyles.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleReposClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/repos");
    }
  };

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>
            <BtnDarkMode />
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <div
                  className={normalLink}
                  onClick={handleReposClick}
                  style={{ cursor: "pointer" }}
                >
                  All Repos
                </div>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
