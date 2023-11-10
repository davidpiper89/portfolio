import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Header() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const title = useRef(null);
  const animationContainer = useRef(null);

  const splitTextToSpans = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className={`letter letter${index + 1}`}>
        {letter}
      </span>
    ));
  };

  useLayoutEffect(() => {
    if (sessionStorage.getItem("headerAnimationPlayed")) {
      // If the animation has played, set elements to their final state without animation
      gsap.set(firstName.current, { x: -143 });
      gsap.set(lastName.current, { x: 48 });
      gsap.set(title.current, { autoAlpha: 1 });
    } else {
      gsap.set(firstName.current, { x: "-500%" });
      gsap.set(lastName.current, { x: "500%" });
      gsap.set(title.current, { autoAlpha: 0 });
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      tl.from(firstName.current, {
        x: "-500%",
        duration: 1,
      })
        .from(
          lastName.current,
          {
            x: "500%",
            duration: 1,
          },
          "<"
        )
        .to(firstName.current, { x: "-150%" })
        .to(lastName.current, { x: "55%" })
        .to(lastName.current, { rotation: 0, y: 0, duration: 0.2 }, "<")
        .add(() => {
          sessionStorage.setItem("headerAnimationPlayed", "true");
        });

      // Shimmer effect
      const shimmerTl = gsap.timeline();

      shimmerTl
        .to([...firstName.current.children, ...lastName.current.children], {
          color: "var(--gold)",
          duration: 0.09,
          stagger: {
            each: 0.1,
            repeat: 1,
            yoyo: true,
          },
        })
        .to(title.current, { autoAlpha: 1, duration: 0.5 });

      tl.add(shimmerTl);

      return () => {
        tl.kill();
        shimmerTl.kill();
      };
    }
  }, []);

  return (
    <header className="headerContainer" ref={animationContainer}>
      <div className="name firstName" ref={firstName}>
        {splitTextToSpans("David")}
      </div>
      <div className="name lastName" ref={lastName}>
        {splitTextToSpans("Piper")}
      </div>
      <div className="title" ref={title}>
        Software Engineer
      </div>
    </header>
  );
}

export default Header;
