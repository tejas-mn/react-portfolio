import React, { useState, useEffect, useRef } from "react";

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

const styles = {
  gridImageContainer: {
    overflow: "hidden",
    transition: "0.3s ease-in-out",
    borderRadius: "8px",
  },
  gridImage: {
    height: "156px",
  }
};

export default ProjectBox;