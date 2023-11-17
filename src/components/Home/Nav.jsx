import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Nav = () => {
  const navItems = useRef([]);
  let navAnimationDelay = sessionStorage.getItem("navAnimationPlayed")
    ? 0
    : 4.5;

  useEffect(() => {
    gsap.set(navItems.current, { autoAlpha: 0, y: -50 });
    gsap
      .fromTo(
        navItems.current,
        { autoAlpha: 0, y: -50 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "ease-in",
          duration: 1,
          stagger: 0.1,
          delay: navAnimationDelay,
        }
      )
      .then(() => {
        sessionStorage.setItem("navAnimationPlayed", "true");
      });
  }, [navAnimationDelay]);

  const addNavItem = (el) => {
    if (el && !navItems.current.includes(el)) {
      navItems.current.push(el);
    }
  };

  return (
    <nav className="navContainer">
      <ul>
        <li ref={addNavItem}>
          <Link to="/about">About Me</Link>
        </li>
        <li ref={addNavItem}>
          <Link to="/bootcamp-projects">Bootcamp Projects</Link>
        </li>
        <li ref={addNavItem}>
          <Link to="/my-projects">My Projects</Link>
        </li>
        <li ref={addNavItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
