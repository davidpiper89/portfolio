import React from "react";
import casino from "../../assets/casino.jpg";
import blackjack from "../../assets/blackjack.jpg";
import "./Projects.css";
import ProjectSlider from "./ProjectSlider";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Piper's Casino",
      image: casino,
      github: "https://github.com/davidpiper89/piperscasino",
      skills:
        "React,  CRA, functional components, Firebase Authentication, Firebase Realtime Database, Node.js, npm, responsive design, CSS, react-router-dom, validation, react hooks (useState, useMemo, useEffect and custom hooks), noSQL, jest",
      website: "https://pipers-casino.david-piper-portfolio.co.uk/",
    },
    {
      id: 2,

      title: "Blackjack App",
      image: blackjack,
      github: "https://github.com/davidpiper89/blackjack",
      skills:
        "React.js, CRA, functional components, react hooks (useState, useEffect, useMemo), responsive design, CSS, Bootstrap, jest, cypress",
      website: "https://blackjack.david-piper-portfolio.co.uk/",
    },
    {
      id: 3,
      title: "Portfolio",
      image: blackjack,
      github: "https://github.com/davidpiper89/blackjack",
      skills:
        "React.js, VITE app, gsap, responsive, react hooks (useState, useLayoutEffect, useEffect)",
      website: "https://david-piper-portfolio.co.uk/",
    },
  ];

  return (
    <div className="projectsContainer">
      <div className="projectsTitle">My Projects</div>
      <ProjectSlider projects={projects} />
    </div>
  );
};

export default MyProjects;
