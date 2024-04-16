import React, { useState, useEffect, useRef } from "react";
import DropDown from "../../utils/components/DropDown";
import { useAlert } from "../../../Providers/AlertProvider";
import { useDebounce } from "../../../hooks/useDebounce";
import { useUser } from "../../../Providers/UserProvider";

export default function SearchBar({ setTags, setFilteredProjects, tagsState }) {
  const {data} = useUser();
  const defaultTags = ["React", "C# .NET", "Flask", "Python"];
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(new Set());
  const [isFocused, setIsFocused] = useState(true);
  const { showAlert } = useAlert();
  const index = useRef(-1);

  const handleOnFocus = () => {
    index.current = -1;
    setIsFocused(true);
  }
  const handleBlur = () => {
    index.current = -1;
    setIsFocused(false);
  }
  const debouncedSearch = useDebounce(fetchSearchResults, 500);

  useEffect(() => {
    if (searchText.trim() !== "") {
      debouncedSearch(searchText.trim(), setSearchResult, tagsState, defaultTags);
    } else {
      setSearchResult(new Set());
    }
  }, [searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  useEffect(() => {
    if (tagsState.size === 0) {
      setFilteredProjects(data.projects);
    } else {
      setFilteredProjects(
        data.projects.filter((project) =>
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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (index.current >= 0) {
        handleAddTag(Array.from(searchResult)[index.current])
        index.current = -1;
      } else {
        handleAddTag(searchText);
      }
    }
    if (event.key === 'ArrowDown') {
      if (searchResult.size > 0) {
        index.current = Math.min(index.current + 1, searchResult.size - 1);
      }
      console.log(document.getElementById('drop-down').childNodes.item(index.current));
    }
    if (event.key === 'ArrowUp') {
      if (searchResult.size > 0) {
        index.current = Math.max(index.current - 1, 0);
      }
      console.log(document.getElementById('drop-down').childNodes.item(index.current));
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
        onKeyDown={handleKeyPress}
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
        <DropDown options={Array.from(searchResult)} onSelect={handleAddTag} selectedIndex={index.current} />
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