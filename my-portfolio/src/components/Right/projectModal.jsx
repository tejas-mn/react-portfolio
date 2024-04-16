import React from "react";
import { useAutoBoldText } from "../../hooks/customHooks";
import "./projects.css";
import { GithubProjectSvg, ProjectLinkSvg } from "../utils/Svg";
import { useAlert } from "../../Providers/AlertProvider";

export default function ProjectModal({
  imageUrl,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  setTags,
  tagsState
}) {
  useAutoBoldText();
  const { alerts, showAlert } = useAlert();

  const handleAddTag = (tag) => {
    if (tag.trim() !== "") {
      if (tagsState.size > 4) {
        showAlert({
          message: "Max tags Reached - " + tagsState.size,
          type: "error"
        });
        return;
      } else {
        setTags((prevTags) => new Set([...prevTags, tag]));
      }
    }
  };

  return (
    <div style={styles.container} className="project-modal-container">
      <div
        style={styles.imageContainer}
        className="project-modal-image-container"
      >
        <img src={imageUrl} alt={title} style={styles.image} />
      </div>
      <div
        style={styles.contentContainer}
        className="project-modal-content-container"
      >
        <h2 style={styles.title}>🚀 {title}</h2>
        <p style={styles.description} className="auto-format">
          {description}
        </p>
        <div style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span className="tag" key={index} style={styles.tag} onClick={() => handleAddTag(tag)}>
              {tag}
            </span>
          ))}
        </div>
        <div
          style={styles.buttonContainer}
          className="project-modal-button-container"
        >
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <button style={styles.button}>
              <GithubProjectSvg /> Github
            </button>
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <button style={styles.button}>
              <ProjectLinkSvg />
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexDirection: "row",
    textAlign: "left",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  image: {
    maxWidth: "100%",
    height: "256px",
    borderRadius: "8px",
    boxShadow: "rgba(74, 74, 74, 0.23) -7px -10px 30px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  contentContainer: {
    width: "50%",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    marginTop: "10px",
    lineHeight: "1.4",
  },
  description: {
    fontSize: "16px",
    marginBottom: "10px",
    marginTop: "0px",
  },
  tagContainer: {
    marginBottom: "10px",
    gap: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "rgb(219 219 219 / 32%)",
    color: "#333",
    padding: "5px 10px",
    borderRadius: "4px",
    marginRight: "5px",
  },
  button: {
    padding: "5px 10px",
    marginRight: "10px",
    backgroundColor: "#dfe3ee",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 0px 10px rgba(74, 74, 74, 0.127)",
  },
};
