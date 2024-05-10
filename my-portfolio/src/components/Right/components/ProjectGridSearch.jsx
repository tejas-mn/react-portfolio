import SearchBar from "./SearchBar";
import TagContainer from "./TagContainer";
import { createPortal } from 'react-dom';
import { useEffect, useRef } from "react";

export default function ProjectGridSearch({ tagsState, setTags, setFilteredProjects, filteredProjects, initialProjects }) {
    const domReady = useRef(false)

    useEffect(() => {
        domReady.current = true
    }, [])

    const handleTagClick = (tagToRemove) => {
        const updatedTags = Array.from(tagsState).filter((tag) => tag !== tagToRemove);
        const updatedProjects = filteredProjects.filter(
            (project) =>
                !project.techStack
                    .toLowerCase()
                    .split(",")
                    .includes(tagToRemove.toLowerCase())
        );
        setTags(new Set(updatedTags));
        setFilteredProjects(updatedProjects);
    };

    return (
        <div style={styles.searchContainer} className="search-container">
            <TagContainer tags={tagsState} handleTagClick={handleTagClick} />
            {
                domReady.current && createPortal(<SearchBar
                    setTags={setTags}
                    setFilteredProjects={setFilteredProjects}
                    tagsState={tagsState}
                    initialProjects={initialProjects}
                />, document.querySelector('.project-title-container'))
            }
        </div>
    );
}

const styles = {
    searchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        margin: "10px 0",
    }
};