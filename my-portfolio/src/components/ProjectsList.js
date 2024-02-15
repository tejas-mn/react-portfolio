import React from "react";
import { projects } from "../Providers/DataProvider";
import { Pagination } from "./Pagination";
import {
  PaginationProvider,
  usePagination,
} from "../Providers/PaginationProvider";
import { useAutoBoldText } from "../Providers/customHooks";

const PaginatedItemList = () => {
  const paginatedItems = usePagination().getPaginatedItems();
  useAutoBoldText();

  return (
    <>
      {paginatedItems.map((currentProject) => (
        <p className="project-list">
          <b>{currentProject.title}</b>{" "}
          <quote>| {currentProject.techStack}</quote>
          <i style={{ float: "right" }}> ({currentProject.timeline})</i>
          <quote style={{ display: 'block' }}>
            <a className="proj-link-list-btn"
              href="https://github.com">Github<sup>↗</sup></a> | {" "}
            <a className="proj-link-list-btn"
              href="https://github.com">Live Link<sup>↗</sup></a></quote>
          <ul>
            <li className="auto-format">{currentProject.description}</li>
          </ul>
        </p>
      ))}
    </>
  );
};

export function ProjectsList() {
  return (
    <>
      <PaginationProvider itemsPerPage={3} items={projects}>
        <PaginatedItemList />
        <Pagination />
      </PaginationProvider>
    </>
  );
}