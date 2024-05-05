import React, { useState, useEffect, useRef } from "react";
import ProjectBoxSkeleton from "./Skeletons/ProjectBoxSkeleton";

function ProjectBox({ project, setCurrentProject, openModal, mesureRef }) {
  // const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);

  // useEffect(() => {
  //   const checkIfImageIsPainted = () => {
  //     if (
  //       imageRef.current &&
  //       imageRef.current.complete &&
  //       imageRef.current.naturalHeight !== 0
  //     ) {
  //       setLoading(false);
  //     } else {
  //       requestAnimationFrame(checkIfImageIsPainted);
  //     }
  //   };

  //   requestAnimationFrame(checkIfImageIsPainted);
  // }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  if(loading){
    return <ProjectBoxSkeleton/>
  }

  return (
    <div
      ref={mesureRef}
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
          style={styles.gridImage}
          ref={imageRef}
          src={
            project.imageUrl
          }
          alt={project.title}
          loading="lazy"
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