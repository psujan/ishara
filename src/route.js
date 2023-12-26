import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home/Homepage";
import AboutUs from "./pages/About/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}
