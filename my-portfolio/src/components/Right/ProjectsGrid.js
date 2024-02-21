import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { projects } from "../../Providers/DataProvider";
import { Modal } from "./utils/Modal";
import ProjectModal from "./projectModal";

function ProjectBox({ project, setCurrentProject, openModal }) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    const checkIfImageIsPainted = () => {
      if (imageRef.current.complete && imageRef.current.naturalHeight !== 0) {
        setLoading(false);
      } else {
        requestAnimationFrame(checkIfImageIsPainted);
      }
    };

    requestAnimationFrame(checkIfImageIsPainted);
  }, []);

  return (
      <div
        key={project.id}
        className="project-box"
        id={project.id}
        onClick={() => {
          setCurrentProject(project);
          openModal();
        }}
      >
        <div style={styles.gridImageContainer}>
          <img
            ref={imageRef}
            src={
              !loading
                ? project.imageUrl
                : "https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
            }
            alt={project.title}
            style={styles.gridImage}
          />
        </div>
        <h3 className="pr-title">{project.title}</h3>
      </div>
  );
}

function Tags({tags, setFilteredProjects}){
  return (
    <div style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span
            className="tag"
            key={index}
            style={styles.tag}
            onClick={() => {
              tag === "All"
                ? setFilteredProjects(() => projects)
                : setFilteredProjects(() =>
                    projects.filter((p) =>
                      p.techStack.split(", ").includes(tag)
                    )
                  );
            }}
          >
            {tag}
          </span>
        ))}
      </div>
  );
}

function ProjectsGrid({ isVisible }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: "",
    title: "",
    techStack: "",
    timeline: "",
    description: "",
    imageUrl: "",
  });

  const openModal = (p) => {
    document.querySelector(".project-grid").scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const tags = ["All", "React", "C# .NET", "Flask", "Python"];

  return (
    <>
      <Tags tags={tags} setFilteredProjects={setFilteredProjects}/>
      
      <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
        {filteredProjects.map((project) => (
          <ProjectBox project={project} openModal={openModal} setCurrentProject={setCurrentProject}/>
        ))}

        <Modal isOpen={modalOpen} onClose={closeModal}>
          <ProjectModal
            title={currentProject.title}
            imageUrl={currentProject.imageUrl}
            githubUrl={currentProject.githubUrl}
            liveUrl={currentProject.liveUrl}
            tags={currentProject.techStack.split(",")}
            description={currentProject.description}
          />
        </Modal>
      </div>
    </>
  );
}

const styles = {
  tagContainer: {
    display: "flex",
    margin: "10px",
    marginTop: "0px",
    justifyContent: "center",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "var(--btn-color-light)",
    color: "#333",
    padding: "1px 15px",
    borderRadius: "4px",
    marginRight: "5px",
  },
  gridImageContainer: {
    overflow: "hidden",
    transition: "0.3s ease-in-out",
    borderRadius: "8px",
  },
  gridImage: {
    height: "156px",
  },
};

export default ProjectsGrid;
