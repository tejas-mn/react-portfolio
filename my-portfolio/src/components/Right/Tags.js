export function Tags({ tags, setTags, setFilteredProjects, filteredProjects }) {
    return (
      <div style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span
            className="tag"
            key={index}
            style={styles.tag}
            onClick={() => {
              setTags(() => tags.filter((t) => t !== tag));
  
              setFilteredProjects(() =>
                filteredProjects.filter(
                  (p) =>
                    !p.techStack
                      .toLowerCase()
                      .split(",")
                      .includes(tag.toLowerCase())
                )
              );
            }}
          >
            {tag} {"🗑"}
          </span>
        ))}
      </div>
    );
  }
  const styles = {
    tagContainer: {
      display: "flex",
      justifyContent: "center",
    },
    tag: {
      display: "inline-block",
      backgroundColor: "var(--btn-color-light)",
      color: "#333",
      padding: "2px 5px 2px 10px",
      borderRadius: "4px",
      marginRight: "5px",
    }
    
  };