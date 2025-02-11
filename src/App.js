import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lessons from "./pages/Lessons";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
