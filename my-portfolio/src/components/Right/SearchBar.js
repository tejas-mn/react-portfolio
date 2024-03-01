import React, { useState, useEffect } from "react";
import { projects } from "../../Providers/DataProvider";
import DropDown from "./utils/DropDown"; 

function SearchBar({ setTags, setFilteredProjects, tagsState }) {
  const defaultTags = ["React", "C# .NET", "Flask", "Python"];
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(defaultTags);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSearch = (value) => {
    setSearchText(value);
    if (value.trim() !== "") {
      fetchSearchResults(value);
    } else {
      setSearchResult(defaultTags);
    }
  };

  const fetchSearchResults = (value) => {
    const requestOptions = {
      method: "GET",
      headers: new Headers({ "apikey": "xxxxxx" }),
    };

    fetch(`https://api.apilayer.com/skills?q=${value}`, requestOptions)
      .then((res) => setSearchResult(res.json()))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (tagsState.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          tagsState.some((tag) =>
            project.techStack.toLowerCase().split(",").includes(tag.toLowerCase())
          )
        )
      );
    }
  }, [tagsState]);

  const handleAddTag = (tag) => {
    if (tag.trim() !== "") {
      if(tagsState.length > 4){
        alert("Max Tags Reached");
        return;
      }
      else{
        setTags([...tagsState, tag]);
      }
      setSearchText("");
      setSearchResult(defaultTags);
    }
  };

  return (
    <div style={{ position: "relative"}}>
      <input
        placeholder="Search Eg.React.."
        type="text"
        value={searchText}
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        onChange={(e) => handleSearch(e.target.value)}
        style={styles.searchInput}
      />
      <button
        className="view-btn"
        onClick={() => handleAddTag(searchText)}
        disabled={searchText.length === 0}
      >
        Search
      </button>

      {isFocused && (
        <DropDown options={searchResult} onSelect={handleAddTag} />
      )}
    </div>
  );
}

const styles = {
  searchInput: {
    outline: "none",
    padding: "2px",
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottom: "1px solid black",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    height: "25px",
    backgroundColor: "var(--btn-color-light)",
    color: "var(--text-color-light)"
  }
};

export default SearchBar;