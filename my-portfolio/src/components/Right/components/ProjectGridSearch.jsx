import SearchBar from "./SearchBar";
import TagContainer from "./TagContainer";

export default function ProjectGridSearch({ tagsState, setTags, setFilteredProjects, filteredProjects, initialProjects }) {

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
            <SearchBar
                setTags={setTags}
                setFilteredProjects={setFilteredProjects}
                tagsState={tagsState}
                initialProjects={initialProjects}
            />
        </div>
    );
}

const styles = {
    searchContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        backgroundColor: "var(--right-nav-color-light)",
        borderRadius: "10px",
        margin: "10px 0",
    }
};