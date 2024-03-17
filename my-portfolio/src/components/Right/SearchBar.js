import React, { useState, useEffect } from "react";
import { projects } from "../../Providers/DataProvider";
import DropDown from "../utils/DropDown";
import { useAlert } from "../../Providers/AlertProvider";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchBar({ setTags, setFilteredProjects, tagsState }) {
  const defaultTags = ["React", "C# .NET", "Flask", "Python"];
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const { showAlert } = useAlert();

  const handleOnFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const debouncedSearch = useDebounce(fetchSearchResults, 500);

  const handleSearch = (value) => {
    setSearchText(value.trim());
    if (value.trim() !== "") {
      debouncedSearch(value.trim(), setSearchResult, tagsState, defaultTags);
    } else {
      setSearchResult(new Set());
    }
  };

  useEffect(() => {
    if (tagsState.size === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          Array.from(tagsState).some((tag) =>
            project.techStack
              .toLowerCase()
              .split(",")
              .includes(tag.toLowerCase())
          )
        )
      );
    }
  }, [tagsState]);

  const handleAddTag = (tag) => {
    if (tag.trim() !== "") {
      if (tagsState.size > 4) {
        showAlert({
          message: "Max tags Reached - " + tagsState.size,
          type: "error"
        });
        return;
      } else {
        setTags(new Set([...tagsState, tag.trim()]));
      }
      setSearchText("");
      setSearchResult(new Set());
    }
  };

  return (
    <div style={{ position: "relative" }}>
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
        <DropDown options={Array.from(searchResult)} onSelect={handleAddTag} />
      )}
    </div>
  );
}

const fetchSearchResults = (value, setSearchResult, tagsState, defaultTags) => {
  if (value === undefined) return;

  const requestOptions = {
    method: "GET",
    headers: new Headers({ apikey: process.env.REACT_APP_API_KEY }),
  };

  fetch(`https://api.apilayer.com/skills?q=${value}`, requestOptions)
    .then((res) => {
      if (res.status === 200)
        return res.json();
      return defaultTags;
    })
    .then((data) => {
      if (data === defaultTags) {
        setSearchResult(new Set(defaultTags.filter((tag) => !tagsState.has(tag) && tag.toLocaleLowerCase().includes(value.toLocaleLowerCase()))));
      } else {
        console.log(data);
        setSearchResult(new Set(data.filter((d) => !tagsState.has(d))));
      }
    })
    .catch((err) => {
      console.log('Error:' + err);
    });
};

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
    color: "var(--text-color-light)",
  },
};