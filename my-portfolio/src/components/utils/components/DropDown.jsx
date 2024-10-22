import React from "react";

function DropDown({ options, onSelect,selectedIndex }) {
  return (
    <ul style={styles.searchResultList} id='drop-down'>
      {options.map((option, index) => (
        <li
          key={index}
          className="search-list-item"
          style={(selectedIndex===index)?styles.hover:styles.searchListItem}
          onMouseDown={() => onSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  searchResultList: {
    backgroundColor: 'var(--btn-color-light)',
    color: 'var(--text-color-light)',
    zIndex: "10 !important",
    position: "absolute",
    top: "30px",
    listStyle: "none",
    width: "70%",
    paddingLeft: "0px",
    borderRadius: "5px",
  },
  searchListItem: {
    cursor: "pointer",
    border: "1px solid var(--btn-color-light-hover)",
  },
  hover:{
    backgroundColor:'var(--btn-color-light-hover)',
    cursor: "pointer",
    border: "1px solid var(--btn-color-light-hover)",
  }
};

export default DropDown;