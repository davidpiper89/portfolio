import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About/About";
import BootcampProjects from "./components/Projects/BootcampProjects";
import MyProjects from "./components/Projects/MyProjects";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bootcamp-projects" element={<BootcampProjects />} />
          <Route path="/my-projects" element={<MyProjects />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
