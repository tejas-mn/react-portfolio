import React from "react";
import { useAutoBoldText } from "../../hooks/customHooks";
import "./projects.css";

export default function ProjectModal({
  imageUrl,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}) {
  useAutoBoldText();

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
            <span className="tag" key={index} style={styles.tag}>
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
              {" "}
              <svg
                style={styles.githubSvg}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>{" "}
              Github
            </button>
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <button style={styles.button}>
              {" "}
              <svg
                style={styles.liveSvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                role="none"
                fill="currentColor"
              >
                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z" />
              </svg>
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
  githubSvg: {
    top: "2px",
    position: "relative",
    scale: "1.1",
  },
  liveSvg: {
    display: "inline",
    position: "relative",
    bottom: "-2px",
    right: "1px",
  },
};
