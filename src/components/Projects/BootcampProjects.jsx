import React from "react";
import simpsonsImage from "../../assets/simpsons.webp";
import weatherImage from "../../assets/weather.webp";
import fantasyImage from "../../assets/fantasy.webp";
import "./Projects.css";
import ProjectSlider from "./ProjectSlider";

const BootcampProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Simpsons Quotes",
      image: simpsonsImage,
      github:
        "https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons",
      skills:
        "React, CRA, JS ES6,  Class components, state management, Lifecycle Methods, Axios API integration, Asynchronous Javascript, GRID and CSS styling, Event/Form handling,  Array manipulation",
      website: "https://simpsons.david-piper-portfolio.co.uk/",
    },
    {
      id: 2,
      title: "Weather App",
      image: weatherImage,
      github: "https://github.com/davidpiper89/weatherproject",
      skills: "HTML5, CSS, JS ES6, Axios, Asynchronous Javascript, Geolocation API, Module imports",
      website: "https://vanillajs.david-piper-portfolio.co.uk/",
    },
    {
      id: 3,
      title: "Fantasy Football App",
      image: fantasyImage,
      github: "https://github.com/davidpiper89/fantasyfrontendgroup",
      skills:
        "React, CRA, Functional Components, React Redux, React Hooks (useState, useSelector, useDispatch, useEffect, useCallback), Axios, CSS, Joi validation, React Webcam",
      website: "https://fantasy.david-piper-portfolio.co.uk/",
    },
    {
      id: 4,
      title: "Fantasy Football Backend",
      image: fantasyImage,
      github: "https://github.com/davidpiper89/fantasyfootballbackendgroup",
      skills:
        "Javascript, Axios, Express, CRUD, RESTless API endpoints,  Middleware, Nodemailer, MySQL, pHpMyAdmin, Insomnia, npm, nodemon",
      website: "",
    },
  ];

  return (
    <div className="projectsContainer">
      <div className="projectsTitle">Bootcamp Projects</div>
      <ProjectSlider projects={projects} />
    </div>
  );
};

export default BootcampProjects;
