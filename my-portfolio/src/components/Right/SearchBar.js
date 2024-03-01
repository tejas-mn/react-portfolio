import { useState, useEffect } from "react";
import { projects } from "../../Providers/DataProvider";

export function SearchBar({ setTags, setFilteredProjects, tagsState }) {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  var myHeaders = new Headers();
  myHeaders.append("apikey", "xxxxx");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      fetch(
        "https://api.apilayer.com/skills?q=" + e.target.value,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchResult(data);
        })
        .catch((err) => console.error(err));
    }

    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (tagsState.length === 0) {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(
      projects.filter((p) => {
        return tagsState.some((t) =>
          p.techStack.toLowerCase().split(",").includes(t.toLowerCase())
        );
      })
    );
  }, [tagsState]);

  return (
    <>
      <div
        style={{ position: "relative"}}
      >
        <input
          placeholder="Search Eg.React.."
          type="text"
          value={searchText}
          onFocus={handleOnFocus}
          onBlur={handleBlur}
          onChange={(e) => handleSearch(e)}
          style={styles.searchInput}
        ></input>
        <button
          className="view-btn"
          onClick={() => {
            if (searchText.length === 0) return;
            setTags([...tagsState, searchText]);
            setSearchText("");
          }}
        >
          Search
        </button>

        {isFocused && (
          <ul style={styles.searchResultList}>
            {searchResult.map((e) => (
              <li className="search-list-item"
                style={{ cursor: "pointer", border: "1px solid var(--btn-color-light-hover)" }}
                onMouseDown={() => {
                  if (e.length === 0) return;
                  setTags([...tagsState, e]);
                  setSearchText("");
                  setSearchResult([]);
                }}
              >
                {e}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
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
    color: "var(--text-color-light)",
    // boxShadow: "0px 0px 13px 0px rgba(0,0,0,0.1)",
  },
  searchResultList: {
    backgroundColor: 'var(--btn-color-light)',
    color: 'var(--text-color-light)',
    zIndex: "10 !important",
    position: "absolute",
    top: "30px",
    listStyle: "none",
    width: "145px",
    paddingLeft: "0px",
    borderRadius: "5px",
  },
};