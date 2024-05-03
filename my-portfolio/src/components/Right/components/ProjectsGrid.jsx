import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import "../styles/projects.css";
import { useUser } from "../../../Providers/UserProvider";
import Modal from "../../utils/components/Modal";
import ProjectModal from "./projectModal";
import SearchBar from "./SearchBar";
import { GridLoader } from "../../utils/components/Loaders";
import FallbackLoader from "../../utils/components/FallbackLoader";
import TagContainer from "./TagContainer";
import { Features } from "../../../Providers/Features";
import { useFeatureToggle } from "../../../Providers/FeatureProvider";
import useOnScreen from "../../../hooks/useOnScreen";

const ProjectBox = lazy(() => import('./ProjectBox'));

function ProjectsGrid() {
  const { data } = useUser();
  const { features } = useFeatureToggle();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [tagsState, setTags] = useState(new Set());

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (() => {
      const newProjects = Array.from(data.projects).slice(0, 8 * page);
      console.log(page);
      // setComments((prevComments) => [...prevComments, ...newComments]);
      setFilteredProjects([...newProjects]);
      setHasMore(newProjects.length > 0);
      setIsLoading(false);
    })();
  }, [page]);

  useEffect(()=>{
    console.log(hasMore);
  }, [hasMore])

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((page) => page + 1);
    }, 2000)
  }, []);

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
      {features[Features.PROJECT_SEARCH] && (
        <SearchSection
          tagsState={tagsState}
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          handleTagClick={handleTagClick}
        />
      )}

      {
        filteredProjects.length > 0 && (
          <ProjectsGridContainer
            hasMore={hasMore}
            isLoading={isLoading}
            loadMore={loadMore}
            filteredProjects={filteredProjects}
            tagsState={tagsState}
            setTags={setTags}
          />)
      }
    </>
  );
}

function SearchSection({ tagsState, setTags, setFilteredProjects, handleTagClick }) {
  return (
    <div style={styles.searchContainer} className="search-container">
      <TagContainer tags={tagsState} handleTagClick={handleTagClick} />
      <SearchBar
        setTags={setTags}
        setFilteredProjects={setFilteredProjects}
        tagsState={tagsState}
      />
    </div>
  );
}

function ProjectsGridContainer({ filteredProjects, tagsState, setTags, isVisible, hasMore, isLoading, loadMore }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: "",
    title: "",
    techStack: "",
    timeline: "",
    description: "",
    imageUrl: "",
  });

  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

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

  return (
    <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
      <Suspense fallback={<FallbackLoader loader={GridLoader} />}>
        {filteredProjects.map((project) => (
          <ProjectBox
            mesureRef={measureRef}
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
      {isLoading && <div className="project-box" style={{
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}>Loading..</div>}
    </div>
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