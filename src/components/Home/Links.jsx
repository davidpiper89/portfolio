import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import CV from "./../../assets/CV.pdf";

const Links = () => {
  // Create a ref for the links container
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const animationDelay = 5;

    gsap.fromTo(
      linksContainerRef.current.children,
      {
        scale: 0,
      },
      {
        duration: 1,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: animationDelay,
      }
    );
  }, []);
  return (
    <ul className="linksContainer" ref={linksContainerRef}>
      <li>
        <a href={CV} download>
          CV
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/david-piper-47911225b/"
          target="_blank"
          rel="noreferrer"
          aria-label="link to my LinkedIn"
        >
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/davidpiper89"
          target="_blank"
          rel="noreferrer"
          aria-label="link to my GitHub"
        >
          <BsGithub />
        </a>
      </li>
    </ul>
  );
};

export default Links;
