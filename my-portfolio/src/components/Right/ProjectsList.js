import React from "react";
import { projects } from "../../Providers/DataProvider";
import { Pagination } from "./utils/Pagination";
import {
  PaginationProvider,
  usePagination,
} from "../../Providers/PaginationProvider";
import { useAutoBoldText } from "../../hooks/customHooks";
import { GithubProjectSvg, ProjectLinkSvg } from "./utils/Svg";

function ProjectItem({ currentProject }) {
  return (
    <p className="project-list">
      <b style={styles.title}>{currentProject.title}</b>
      {" | "}
      <i>{currentProject.techStack}</i>
      <i style={styles.timeline}> ({currentProject.timeline})</i>
      <div>
        <a
          className="proj-link-list-btn"
          href={currentProject.githubUrl}
          target="blank"
        >
          {" "}
          <GithubProjectSvg />
          {"  "}
          Github
        </a>{" "}
        |{" "}
        <a
          className="proj-link-list-btn"
          href={currentProject.liveUrl}
          target="blank"
        >
          <ProjectLinkSvg />
          Live Link
        </a>
      </div>
      <ul>
        <li className="auto-format">{currentProject.description}</li>
      </ul>
    </p>
  );
}

const PaginatedItemList = () => {
  const paginatedItems = usePagination().getPaginatedItems();
  useAutoBoldText();
  return (
    <>
      {paginatedItems.map((currentProject) => (
        <ProjectItem key={currentProject.id} currentProject={currentProject} />
      ))}
    </>
  );
};

export function ProjectsList() {
  return (
    <>
      <PaginationProvider itemsPerPage={4} items={projects}>
        <PaginatedItemList />
        <Pagination />
      </PaginationProvider>
    </>
  );
}

const styles = {
  title: { fontSize: "larger" },
  timeline: { float: "right" },
};
