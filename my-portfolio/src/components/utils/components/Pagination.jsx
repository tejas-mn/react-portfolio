import { usePagination } from "../../../Providers/PaginationProvider";
import { useTheme } from "../../../Providers/ThemeProvider";
import '../styles/Pagination.css';
export const Pagination = () => {
  const { currentPage, nextPage, prevPage, totalPages, setCurrentPage } =
    usePagination();
  const { theme } = useTheme();

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul
      style={{ listStyle: "none", display: "flex", justifyContent: "flex-end" }}
    >
      <li>
        <button
          className="page-btn"
          aria-label="Prev"
          style={{
            backgroundColor: "var(--btn-color-light)",
            color: theme === "dark-theme" ? "#fff" : "#333",
          }}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>


      {pageNumbers.map((number) => (
        <li key={number} style={{ margin: "0 5px" }}>
          <button
            className="page-btn"
            aria-label={number}
            style={{
              backgroundColor:
                currentPage === number
                  ? "var(--btn-color-light)"
                  : "var(--btn-color-light-hover)",
              color: theme === "dark-theme" ? "#fff" : "#333",
            }}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        </li>
      ))}

      <li>
        <button
          className="page-btn"
          aria-label="Next"
          style={{
            backgroundColor: "var(--btn-color-light)",
            color: theme === "dark-theme" ? "#fff" : "#333",
          }}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
