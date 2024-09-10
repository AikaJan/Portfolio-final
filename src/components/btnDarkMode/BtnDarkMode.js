import React, { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalSrorage";
import detectDarkMode from "../../utils/detectDarkMode";
import moon from "./moon.svg";
import sun from "./sun.svg";
import "./bntDarkModeStyle.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => (darkMode === "light" ? "dark" : "light"));
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className={darkMode === "dark" ? btnActive : btnNormal}
      >
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </div>
  );
};

export default BtnDarkMode;
