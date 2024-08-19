import lightButton from "../assets/website/light-mode-button.png";
import darkButton from "../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";
const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <img
        src={theme === "light" ? lightButton : darkButton}
        alt=""
        className={`w-12 cursor-pointer transition-all duration-300 `}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </div>
  );
};

export default DarkModeToggle;
