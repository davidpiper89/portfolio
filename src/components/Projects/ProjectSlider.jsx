import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import BackButton from "../BackButton";

const ProjectSlider = ({ projects }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const projectRef = useRef();

  function showNextProject() {
    // Animate out the current project
    gsap.to(projectRef.current, {
      autoAlpha: 0,
      onComplete: () => {
        setProjectIndex((index) => {
          return index === projects.length - 1 ? 0 : index + 1;
        });
      },
    });
  }

  function showPrevProject() {
    // Animate out the current project
    gsap.to(projectRef.current, {
      autoAlpha: 0,
      onComplete: () => {
        setProjectIndex((index) => {
          return index === 0 ? projects.length - 1 : index - 1;
        });
      },
    });
  }

  useEffect(() => {
    // Animate in the new project
    gsap.fromTo(
      projectRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5 }
    );
  }, [projectIndex]);
  return (
    <>
      <div className="projectContainer" ref={projectRef}>
        <div className="projectTitle">{projects[projectIndex].title}</div>

        <img
          src={projects[projectIndex].image}
          alt={`${projects[projectIndex].title} screenshot`}
          className="projectImage"
        />

        <div className="projectDetails">
          <div className="projectSkills">
            <h3>Skills</h3>
            <p>{projects[projectIndex].skills}</p>
          </div>
          <div className="projectLinks">
            <a
              href={projects[projectIndex].github}
              target="_blank"
              rel="noopener noreferrer"
              className="projectGithub"
            >
              GitHub
            </a>
            {projects[projectIndex].website && (
              <a
                href={projects[projectIndex].website}
                target="_blank"
                rel="noopener noreferrer"
                className="projectWebsite"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="arrowSlider">
        <button className="arrowBtn" onClick={showPrevProject}>
          <ArrowBigLeft />
        </button>
        <div>
          {projectIndex + 1} / {projects.length}
        </div>
        <button className="arrowBtn" onClick={showNextProject}>
          <ArrowBigRight />
        </button>
      </div>
      <BackButton />
    </>
  );
};

export default ProjectSlider;
