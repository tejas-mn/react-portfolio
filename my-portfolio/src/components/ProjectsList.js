import React from "react";
import { projects } from "../Providers/DataProvider";
import { Pagination } from "./Pagination";
import {
  PaginationProvider,
  usePagination,
} from "../Providers/PaginationProvider";

const PaginatedItemList = () => {
  const paginatedItems = usePagination().getPaginatedItems();

  return (
    <>
      {paginatedItems.map((currentProject) => (
        <p className="project-list">
          <b>{currentProject.title}</b>{" "}
          <quote>| {currentProject.techStack}</quote>
          <i style={{ float: "right" }}> ({currentProject.timeline})</i> <br />
          <quote>Github | Live Link</quote>
          <ul>
            <li>{currentProject.description}</li>
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
