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
const PER_PAGE = 7;

const ProjectsGrid = () => {
  const { data } = useUser();
  const { features } = useFeatureToggle();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [initialProjects, setInitialProjects] = useState([]);
  const [tagsState, setTags] = useState(new Set());
  const [pageNum, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (() => {
      const newProjects = Array.from(data.projects).slice(0, PER_PAGE * pageNum);
      // console.log(pageNum, hasMore);
      setHasMore(newProjects.length > filteredProjects.length);
      setFilteredProjects([...newProjects]);
      setInitialProjects([...newProjects]);
      setIsLoading(false);
    })();
  }, [pageNum]);

  useEffect(() => {
    console.log(hasMore);
  }, [hasMore])

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((pageNum) => pageNum + 1);
    }, 2000)
  }, []);

  return (
    <>
      {features[Features.PROJECT_SEARCH] && (
        <SearchSection
          tagsState={tagsState}
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          filteredProjects={filteredProjects}
          initialProjects={initialProjects}
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

const SearchSection = ({ tagsState, setTags, setFilteredProjects, filteredProjects, initialProjects }) => {

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
    <div style={styles.searchContainer} className="search-container">
      <TagContainer tags={tagsState} handleTagClick={handleTagClick} />
      <SearchBar
        setTags={setTags}
        setFilteredProjects={setFilteredProjects}
        tagsState={tagsState}
        initialProjects = {initialProjects}
      />
    </div>
  );
}

const ProjectsGridContainer = ({ filteredProjects, tagsState, setTags, isVisible, hasMore, isLoading, loadMore }) => {
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
    if (isIntersecting && hasMore && tagsState.size==0) { //load only when there are no tags set (user is not searching)
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

  const openModal = () => {
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

        {isLoading && <div style={styles.load}>Loading..</div>}

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
  load: {
    display: 'flex',
    color: 'var(--text-color-light)',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ProjectsGrid;