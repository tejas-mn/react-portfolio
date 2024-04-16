import React, { Suspense, lazy, useState } from "react";
import "./projects.css";
import { useUser } from "../../Providers/UserProvider";
import Modal from "../utils/Modal";
import ProjectModal from "./projectModal";
import SearchBar from "./SearchBar";
import { GridLoader } from "../utils/Loaders";
import FallbackLoader from "../utils/FallbackLoader";
import TagContainer from "./TagContainer";
import { Features } from "../../Providers/Features";
import { useFeatureToggle } from "../../Providers/FeatureProvider";

const ProjectBox = lazy(() => import('./ProjectBox'));

function ProjectsGrid({ isVisible }) {
  const {data} = useUser();
  const [filteredProjects, setFilteredProjects] = useState(data.projects);
  const [modalOpen, setModalOpen] = useState(false);
  const { features } = useFeatureToggle();
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

  const [tagsState, setTags] = useState(new Set());

  const handleTagClick = (tagToRemove) => {
    const updatedTags = Array.from(tagsState).filter((tag) => tag !== tagToRemove);
    const updatedProjects = filteredProjects.filter(
      (project) =>
        !project.techStack
          .toLowerCase()
          .split(",")
          .includes(tagToRemove.toLowerCase())
    );
    setTags(new Set(updatedTags));
    setFilteredProjects(updatedProjects);
  };

  return (
    <>
      {features[Features.PROJECT_SEARCH] && <div style={styles.searchContainer} className="search-container">
        <TagContainer tags={tagsState} handleTagClick={handleTagClick} />

        <SearchBar
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          tagsState={tagsState}
        />
      </div>
      }
      <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
        <Suspense fallback={<FallbackLoader loader={GridLoader} />}>
          {filteredProjects.map((project) => (
            <ProjectBox
              key={project.id}
              project={project}
              openModal={openModal}
              setCurrentProject={setCurrentProject}
            />
          ))}
        </Suspense>


        <Modal isOpen={modalOpen} onClose={closeModal}>
          <ProjectModal
            setTags={setTags}
            tagsState={tagsState}
            key={currentProject.id}
            title={currentProject.title}
            imageUrl={currentProject.imageUrl}
            githubUrl={currentProject.githubUrl}
            liveUrl={currentProject.liveUrl}
            tags={currentProject.techStackList}
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
  },
};

export default ProjectsGrid;