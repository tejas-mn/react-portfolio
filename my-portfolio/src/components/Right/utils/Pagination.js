import { usePagination } from "../../../Providers/PaginationProvider";
import { useTheme } from "../../../Providers/ThemeProvider";

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
      <button
        className="page-btn"
        style={{
          backgroundColor: "var(--btn-color-light)",
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

      <button
        className="page-btn"
        style={{
          backgroundColor: "var(--btn-color-light)",
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
