import React, { useState } from "react";
import "./projects.css";
import { projects } from "../../Providers/DataProvider";
import { Modal } from "./utils/Modal";
import ProjectModal from "./projectModal";
import { SearchBar } from "./SearchBar";
import { ProjectBox } from "./ProjectBox";
import TagContainer  from "./Tags";

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

  const tags = ["React", "C# .NET", "Flask", "Python"];
  const [tagsState, setTags] = useState([]);
  
  const handleTagClick = (tagToRemove) => {
    const updatedTags = tagsState.filter((tag) => tag !== tagToRemove);
    const updatedProjects = filteredProjects.filter(
      (project) => !project.techStack.toLowerCase().split(",").includes(tagToRemove.toLowerCase())
    );
    setTags(updatedTags);
    setFilteredProjects(updatedProjects);
  };

  return (
    <>
      <div style={styles.searchContainer}>
        <TagContainer
          tags={tagsState}
          handleTagClick={handleTagClick}
        />

        <SearchBar
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          tagsState={tagsState}
        />
      </div>

      <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
        {filteredProjects.map((project) => (
          <ProjectBox
            project={project}
            openModal={openModal}
            setCurrentProject={setCurrentProject}
          />
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
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    backgroundColor: "var(--right-nav-color-light)",
    borderRadius: "10px",
    marginBottom: "10px",
  }
};

export default ProjectsGrid;