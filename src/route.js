import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home/Homepage";
import AboutUs from "./pages/About/AboutUs";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
