import ProjectsGrid from "./ProjectsGrid";
import React, { useState } from "react";
import { ProjectsList } from "./ProjectsList";
import { useFeatureToggle } from "../../Providers/FeatureProvider";
import { Features } from "../../Providers/Features";

export default function Work() {
  const [isGridView, setGridView] = useState(false);
  const [btnText, setbtnText] = useState("☷ Grid view");
  const { features } = useFeatureToggle();
  return (
    <section>
      <div style={styles.projectHeader} className="project-title-container">
        <h2 style={styles.title} className="project-title">
          🚀 Projects
        </h2>
        {features[Features.PROJECT_DEFAULT_VIEW] && <button
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
        }
      </div>
      {(((isGridView && features[Features.PROJECT_DEFAULT_VIEW]) || features[Features.PROJECT_GRID_VIEW])) ? <ProjectsGrid isVisible={isGridView || features[Features.PROJECT_GRID_VIEW]} /> : (<ProjectsList />)}
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
