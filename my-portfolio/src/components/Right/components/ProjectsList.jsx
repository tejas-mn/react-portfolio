import React from "react";
import { useUser } from "../../../Providers/UserProvider";
import { Pagination } from "../../utils/components/Pagination";
import {
  PaginationProvider,
  usePagination,
} from "../../../Providers/PaginationProvider";
import { useAutoBoldText } from "../../../hooks/useAutoBoldText";
import { GithubProjectSvg, ProjectLinkSvg } from "../../utils/components/Svg";

function ProjectItem({ currentProject }) {
  return (
    <div className="project-list">
      <b style={styles.title}>{currentProject.title}</b>
      {" | "}
      {currentProject.techStackList.map(p => <i key={p} className="techStackItem">{p}</i>)}
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
    </div>
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
  const {data} = useUser();
  return (
    <PaginationProvider itemsPerPage={4} items={data.projects}>
      <PaginatedItemList />
      <Pagination />
    </PaginationProvider>
  );
}

const styles = {
  title: { fontSize: "larger" },
  timeline: { float: "right" },
  techStackItem: {
    margin: '2px',
    borderRadius: '5px',
    padding: '0px 10px',
    backgroundColor: 'var(--btn-color-light-hover)'
  }
};
