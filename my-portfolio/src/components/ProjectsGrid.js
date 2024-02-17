import React, { useEffect } from "react";
import "./projects.css";
import { projects } from "../Providers/DataProvider";
import { Modal } from "./Modal";
import { useState } from "react";
import ProjectModal from "./projectModal";

function ProjectsGrid({ isVisible }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
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
    document.querySelector('.project-grid').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const tags = ['All', 'React', 'C# .NET', 'Flask', 'Python'];

  return (
    <>
      <div style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span className="tag" key={index} style={styles.tag} onClick={() => {
            (tag==='All')?setFilteredProjects(()=>projects):setFilteredProjects(()=>projects.filter((p) => p.techStack.split(', ').includes(tag)))
          }}>{tag}</span>
        ))}
      </div>

      <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-box" id={project.id}
            onClick={() => {
              setCurrentProject(project);
              openModal();
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


const styles = {
  tagContainer: {
    display: 'flex',
    margin: '10px',
    marginTop: '0px',
    justifyContent: 'center'
  },
  tag: {
    display: 'inline-block',
    backgroundColor: 'var(--btn-color-light)',
    color: '#333',
    padding: '1px 15px',
    borderRadius: '4px',
    marginRight: '5px',
  }
}

export default ProjectsGrid;
