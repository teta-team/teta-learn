import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [darkMode, setDarkMode] = useState("light-mode");

  function changeTheme() {
    if (darkMode === "light-mode") {
      document.body.className = "dark-mode";
      document.body.style.transition = "background-color 0.3s ease";
      document.getElementById("icon").classList = "bi bi-sun-fill";
      setDarkMode("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else if (darkMode === "dark-mode") {
      document.body.className = "light-mode";
      document.body.style.transition = "background-color 0.3s ease";
      document.getElementById("icon").classList = "bi bi-moon-fill";
      setDarkMode("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark-mode") {
      document.body.className = "dark-mode";
      document.getElementById("icon").classList = "bi bi-sun-fill";
      setDarkMode("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.className = "light-mode";
      document.getElementById("icon").classList = "bi bi-moon-fill";
      setDarkMode("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  }, []);

  return (
    <div className="d-flex row justify-content-between align-items-center">
      <Link to="/">تتالرن</Link>
      <nav className="d-flex row">
        <Link to="/">خانه</Link>
        <Link to="/lessons">دروس</Link>
        <Link to="/questions">سوالات</Link>
        <Link to="/chat">پرسش و پاسخ</Link>
        <Link to="/contact">ارتباط با ما</Link>
        <div className="line"></div>
      </nav>
      <button type="button" onClick={changeTheme}>
        <i id="icon" className="bi bi-moon-fill"></i>
      </button>
    </div>
  );
}

export default Menu;
