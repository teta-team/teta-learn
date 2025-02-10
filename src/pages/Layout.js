import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  function handleScroll() {
    if (window.scrollY > 200) {
      document.getElementById("go-top").style.transform = "translateY(0)";
    } else {
      document.getElementById("go-top").style.transform = "translateY(80px)";
    }
  }

  function handleGoTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="circle1"></div>
      <div id="circle2"></div>
      <div id="circle3"></div>
      <div id="circle4"></div>

      <Outlet />
      <button id="go-top" onClick={handleGoTop}>
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}

export default Layout;
