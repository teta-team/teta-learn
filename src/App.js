import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./pages/Contact";
import Lessons from "./pages/Lessons";
import Physics from "./pages/lessons/Physics";
import Chemistry from "./pages/lessons/Chemistry";
import Geometry from "./pages/lessons/Geometry";
import MathPage from "./pages/lessons/Math";
import NotFound from "./pages/404";
import ProjectsPage from "./pages/Projects";
import IonDetails from "./pages/apps/ions/details";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/physics" element={<Physics />} />
          <Route path="/lessons/chemistry" element={<Chemistry />} />
          <Route path="/lessons/math" element={<MathPage />} />
          <Route path="/lessons/geometry" element={<Geometry />} />
          <Route path="/lessons/project" element={<ProjectsPage />} />
          <Route path="/chemistry/ion/details" element={<IonDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
