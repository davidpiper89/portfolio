import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";
import BackButton from "../BackButton";
import me from "../../assets/me.webp";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, ease: "power1.out", duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <section className="sectionContainer about" id="about" ref={aboutRef}>
      <div className="aboutTitle">About me</div>
      <img src={me} alt="pic" className="mePic"></img>
      <div className="aboutContent">
        <p>
          Hello! I'm David. I am a full stack web developer and computer
          enthusiast. Deciding to develop my computer skills at the Jump Digital
          School, where I completed their rigorous Professional Software
          Engineering Bootcamp. With additional invaluable experience and
          insights during my nearly decade-long tenure with the NHS.
        </p>
        <p>
          See
          <a
            className="link"
            href="https://www.thejump.tech/"
            target="_blank"
            rel="noreferrer"
          >
            The Jump Digital School Website
          </a>
        </p>
        <p>
          On the technical side, I'm adept in frontend technologies like HTML5,
          CSS/SASS, JavaScript, TypeScript, and React JS. When it comes to
          backend, I'm skilled in Node.js, Express, SQL, NoSQL, and phpMyAdmin.
          Along with more.
        </p>
      </div>
      <BackButton />
    </section>
  );
};

export default About;
