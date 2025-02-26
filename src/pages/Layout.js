import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Layout() {
  function handleScroll() {
    if (window.scrollY > 200) {
      document.getElementById("go-top").style.transform = "translateY(0)";
    } else {
      document.getElementById("go-top").style.transform = "translateY(80px)";
    }
  }

  function handleGoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <header>
        <div className="container">
          <Menu />
        </div>
      </header>

      <Outlet />

      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
      <button id="go-top" onClick={handleGoTop}>
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}

export default Layout;
