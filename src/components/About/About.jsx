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
          Hello! I'm David, a full-stack web developer with a deep-rooted
          passion for technology and gaming. My journey in tech began at the
          Jump Digital School, where I honed my skills through their
          Professional Software Engineering Bootcamp. My career has been
          diverse, including a nearly decade-long tenure with the NHS, where I
          developed sophisticated Excel databases, blending my love for
          technology with practical, impactful solutions.
        </p>

        <p>
          See{" "}
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
          Beyond my professional life, I'm an avid gamer and a keen enthusiast
          of strategic games like chess and poker. These games not only provide
          entertainment but also sharpen my problem-solving and strategic
          planning skills – abilities that I believe are vital in the
          ever-evolving world of web development.
        </p>
        <p>
          Technically, I’m well-versed in frontend technologies like HTML5,
          CSS/SASS, JavaScript, TypeScript, and React JS. My backend expertise
          includes Node.js, Express, SQL, NoSQL, and phpMyAdmin, among others.
        </p>
        <p>
          I invite you to explore my portfolio, see my projects, and understand
          how my blend of technical prowess and strategic thinking come together
          to create impactful digital solutions.
        </p>
      </div>
      <BackButton />
    </section>
  );
};

export default About;
