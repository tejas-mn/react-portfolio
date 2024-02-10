import { useContext } from "react";
import { usePagination } from "../Providers/PaginationProvider";
import { ThemeContext } from "../Providers/ThemeProvider";

export const Pagination = () => {
  const { currentPage, nextPage, prevPage, totalPages, setCurrentPage } = usePagination();
  const { theme } = useContext(ThemeContext);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul
      style={{ listStyle: "none", display: "flex", justifyContent: "flex-end" }}
    >
      <button
        className="page-btn"
        style={{
          backgroundColor: theme === "dark-theme" ? "rgb(89 89 89)" : "#f7f7f7",
          color: theme === "dark-theme" ? "#fff" : "#333",
        }}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <li key={number} style={{ margin: "0 5px" }}>
          <button
            className="page-btn"
            style={{
              backgroundColor:
                currentPage === number
                  ? theme === "dark-theme"
                    ? "rgb(89 89 89)"
                    : "#f7f7f7"
                  : theme === "dark-theme"
                  ? "#333"
                  : "#fff",
              color: theme === "dark-theme" ? "#fff" : "#333",
            }}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        </li>
      ))}

      <button
        className="page-btn"
        style={{
          backgroundColor: theme === "dark-theme" ? "rgb(89 89 89)" : "#f7f7f7",
          color: theme === "dark-theme" ? "#fff" : "#333",
        }}
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </ul>
  );
};
