import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import BootcampProjects from "./components/projects/BootcampProjects";
import MyProjects from "./components/projects/MyProjects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bootcamp-projects" element={<BootcampProjects />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
