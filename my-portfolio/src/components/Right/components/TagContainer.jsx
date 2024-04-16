import React from 'react';

function Tag({ tag, onClick }) {
  return (
    <span className="tag" style={styles.tag}>
      {tag} <span  style={{
        color:'red'
      }} onClick={onClick}>{"🗑"}</span>
    </span>
  );
}

function TagList({ tags, onTagClick }) {
  
  return (
    <div style={styles.tagContainer}>
      {Array.from(tags).map((tag, index) => (
        <Tag key={index} tag={tag} onClick={() => onTagClick(tag)} />
      ))}
    </div>
  );
}

function TagContainer({ tags, handleTagClick }) {
  return (
    <TagList tags={tags} onTagClick={handleTagClick} />
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

export default TagContainer;