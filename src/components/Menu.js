import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [darkMode, setDarkMode] = useState("light-mode");
  const [open, setOpen] = useState(false);

  // تابع برای بستن منو هنگام کلیک روی لینک
  const closeMenu = () => {
    setOpen(false);
  };

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-list menu-list-icon"
        viewBox="0 0 16 16"
        onClick={() => setOpen(!open)} // ساده‌سازی toggle
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
      <Link to="/">تتالرن</Link>
      <nav className="d-flex row desktop-nav">
        <Link to="/" onClick={closeMenu}>
          خانه
        </Link>
        <Link to="/lessons" onClick={closeMenu}>
          دروس
        </Link>
        <Link to="/questions" onClick={closeMenu}>
          سوالات
        </Link>
        <Link to="/chat" onClick={closeMenu}>
          پرسش و پاسخ
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          ارتباط با ما
        </Link>
        <div className="line"></div>
      </nav>
      <nav className={`d-flex row mobile-nav ${open ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          خانه
        </Link>
        <Link to="/lessons" onClick={closeMenu}>
          دروس
        </Link>
        <Link to="/questions" onClick={closeMenu}>
          سوالات
        </Link>
        <Link to="/chat" onClick={closeMenu}>
          پرسش و پاسخ
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          ارتباط با ما
        </Link>
        <div className="line"></div>
      </nav>
      <button type="button" onClick={changeTheme}>
        <i id="icon" className="bi bi-moon-fill"></i>
      </button>
    </div>
  );
}

export default Menu;
