import ProjectsGrid from "./ProjectsGrid";
import React, { useState } from "react";
import { ProjectsList } from "./ProjectsList";

export function Work() {
  const [isGridView, setGridView] = useState(false);
  const [btnText, setbtnText] = useState("☷ Grid view");

  return (
    <section>
      <div style={styles.projectHeader} className="project-title-container">
        <h2 style={styles.title} className="project-title">
          🚀 Projects | Blogs
        </h2>
        <button
          className="view-btn"
          onClick={() => {
            setGridView((prev) => !prev);
            !isGridView
              ? setbtnText("≡ List View")
              : setbtnText("☷  Grid View");
          }}
        >
          {btnText}
        </button>
      </div>
      {isGridView ? <ProjectsGrid isVisible={isGridView} /> : <ProjectsList />}
    </section>
  );
}

const styles = {
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white" },
};
