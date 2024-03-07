import "./App.css";
import React from "react";
import Landing from "./pages/Home Page/index";
import "../src/font/stylesheet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Policy from "./pages/Home Page/policy";
import Terms from "./pages/Home Page/terms";
import Info from "./pages/Home Page/info";
import Register from "./pages/User Information/register";
import Medical from "./pages/User Information/medical";
import Application from "./pages/User Information/application-review";
import Contact from "./pages/Home Page/contact";
import Conditions from "./pages/User Information/conditions";
import Saudi from "../src/pages/Saudi Arabia/Index"
import Advice from "../src/pages/Travel Advice/Index"
import Useful from "../src/pages/Useful Contact/Index"
import Transportation from "./pages/Transportation/Index"
import Road from "./pages/Road Trip Guide/Index"


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/application-review" element={<Application />} />
          <Route path="/privacy" element={<Policy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/important-info" element={<Info />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-saudi" element={<Saudi />} />
          <Route path="/travel-safety-tips" element={<Advice />} />
          <Route path="/useful-contacts" element={<Useful />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/road-trip-essentials" element={<Road />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
