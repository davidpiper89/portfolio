import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function IntroAnimation() {
  const sword1 = useRef(null);
  const sword2 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });

    // Initial clash
    tl.to(sword1.current, {
      rotation: -45,
      duration: 0.5,
      ease: "power1.inOut",
    })
      .to(
        sword2.current,
        { rotation: 45, duration: 0.5, ease: "power1.inOut" },
        "<"
      )
      // Reset position
      .to([sword1.current, sword2.current], { rotation: 0, duration: 0.25 })
      // Second clash
      .to(sword1.current, {
        rotation: -45,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(
        sword2.current,
        { rotation: 45, duration: 0.5, ease: "power1.inOut" },
        "<"
      )
      // Reset position again
      .to([sword1.current, sword2.current], { rotation: 0, duration: 0.25 });
  }, []);

  return (
    <div className="animationContainer">
      <div className="sword sword1" ref={sword1}></div>
      <div className="sword sword2" ref={sword2}></div>
    </div>
  );
}

export default IntroAnimation;
