import React, { useState, useCallback, useEffect } from "react";
import "../styles/projects.css";
import { useUser } from "../../../Providers/UserProvider";
import ProjectGridSearch from "./ProjectGridSearch";
import { Features } from "../../../Providers/Features";
import { useFeatureToggle } from "../../../Providers/FeatureProvider";
import ProjectsGridContainer from "./ProjectsGridContainer";

const PER_PAGE = 7;

const ProjectsGrid = () => {
  const { data } = useUser();
  const { features } = useFeatureToggle();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [initialProjects, setInitialProjects] = useState([]);
  const [tagsState, setTags] = useState(new Set());
  const [pageNum, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (() => {
      const newProjects = Array.from(data.projects).slice(0, PER_PAGE * pageNum);
      setHasMore(newProjects.length > filteredProjects.length);
      setFilteredProjects([...newProjects]);
      setInitialProjects([...newProjects]);
      setIsLoading(false);
    })();
  }, [pageNum]);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((pageNum) => pageNum + 1);
    }, 1000)
  }, []);

  return (
    <>
      {features[Features.PROJECT_SEARCH] && (
        <ProjectGridSearch
          tagsState={tagsState}
          setTags={setTags}
          setFilteredProjects={setFilteredProjects}
          filteredProjects={filteredProjects}
          initialProjects={initialProjects}
        />
      )}

      {
        filteredProjects.length > 0 && (
          <ProjectsGridContainer
            hasMore={hasMore}
            isLoading={isLoading}
            loadMore={loadMore}
            filteredProjects={filteredProjects}
            tagsState={tagsState}
            setTags={setTags}
          />)
      }
    </>
  );
}

export default ProjectsGrid;