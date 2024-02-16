import React from "react";
import "./projects.css";
import { projects } from "../Providers/DataProvider";
import { Modal } from "./Modal";
import { useState } from "react";
import ProjectModal from "./projectModal";

function ProjectsGrid({ isVisible }) {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: "",
    title: "",
    techStack: "",
    timeline: "",
    description: "",
    imageUrl: ""
  });

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
            <h3 className="pr-title">{project.title}</h3>
          </div>
        ))}

        <Modal isOpen={modalOpen} onClose={closeModal}>
          <ProjectModal title={currentProject.title} imageUrl={currentProject.imageUrl} tags={currentProject.techStack.split(',')} description={currentProject.description} />
        </Modal>
      </div>
    </>
  );
}

export default ProjectsGrid;
