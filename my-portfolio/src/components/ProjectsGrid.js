import React from "react";
import "./projects.css";
import { ProfileLinks } from "./ProfileLinks";
import { projects } from "../Providers/DataProvider";
import { Modal } from "./Modal";
import { useState } from "react";


function ProjectsGrid({ isVisible }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const openModal = (p) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
        {projects.map((project) => (
          <div key={project.id} className="project-box"
            onClick={() => {
              openModal();
              setCurrentProject(project);
            }}>
            <div
              style={{
                overflow: "hidden",
                transition: "0.3s ease-in-out",
                borderRadius: "8px",
              }}
            >
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            {/* <ProfileLinks />
            <p>{project.description}</p> */}
          </div>
        ))}

        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h3 style={{ marginTop: '0' }}>{currentProject.title}</h3>
          {/* <div>
            <div className="_left"></div>
            <div className="_right"></div>
          </div> */}
          <p className="project-list">

            <i style={{ float: "left" }}>{currentProject.techStack}</i>
            <i style={{ float: "right" }}> ({currentProject.timeline})</i>
            <quote >
              <a className="proj-link-list-btn"
                href="https://github.com">Github<sup>↗</sup></a> | {" "}
              <a className="proj-link-list-btn"
                href="https://github.com">Live Link<sup>↗</sup></a></quote>
            <ul>
              <p className="auto-format">{currentProject.description}</p>
            </ul>
          </p>
        </Modal>
      </div>
    </>
  );
}

export default ProjectsGrid;
