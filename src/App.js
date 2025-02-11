import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lessons from "./pages/Lessons";
import Physics from "./pages/lessons/Physics";
import Chemistry from "./pages/lessons/Chemistry";
import Geometry from "./pages/lessons/Geometry";
import Math from "./pages/lessons/Math";
import Games from "./pages/Games"
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/physics" element={<Physics />} />
          <Route path="/lessons/chemistry" element={<Chemistry />} />
          <Route path="/lessons/math" element={<Math />} />
          <Route path="/lessons/geometry" element={<Geometry />} />
          <Route path="/games" element={<Games />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
