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
      if (
        imageRef.current &&
        imageRef.current.complete &&
        imageRef.current.naturalHeight !== 0
      ) {
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

function Tags({ tags, setTags, setFilteredProjects, filteredProjects }) {

  return (
    <div style={styles.tagContainer}>
      {tags.map((tag, index) => (
        <span
          className="tag"
          key={index}
          style={styles.tag}
          onClick={() => {
            setTags(() => tags.filter((t) => t !== tag));

            setFilteredProjects(() =>
              filteredProjects.filter(
                (p) =>
                  !p.techStack
                    .toLowerCase()
                    .split(",")
                    .includes(tag.toLowerCase())
              )
            );
          }}
        >
          {tag} {"🗑"}
        </span>
      ))}
    </div>
  );
}

function SearchBar({ setTags, setFilteredProjects, tagsState }) {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if(tagsState.length==0){
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(
      projects.filter((p) => {
        return tagsState.some((t) =>
          p.techStack.toLowerCase().split(",").includes(t.toLowerCase())
        );
      })
    );
  }, [tagsState]);

  return (
    <>
      <div>
        <input
          placeholder="Search Eg.React.."
          type="text"
          value={searchText}
          onChange={(e) => handleSearch(e)}
          style={{
            outline: "none",
            padding: "2px",
            borderBottomLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottom: "1px solid black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            height: "25px",
            backgroundColor: "var(--btn-color-light)",
            color: "var(--text-color-light)",
            // boxShadow: "0px 0px 13px 0px rgba(0,0,0,0.1)",
          }}
        ></input>
        <button
          className="view-btn"
          onClick={() => {
            if (searchText.length === 0) return;
            setTags([...tagsState, searchText]);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
    </>
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
  const tags = ["React", "C# .NET", "Flask", "Python"];
  const [tagsState, setTags] = useState([]);

  return (
    <>
      <div style={styles.searchContainer}>
        <Tags
          tags={tagsState}
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          filteredProjects={filteredProjects}
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
  tagContainer: {
    display: "flex",
    // margin: "10px",
    // marginTop: "0px",
    justifyContent: "center",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "var(--btn-color-light)",
    color: "#333",
    padding: '2px 5px 2px 10px',
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
