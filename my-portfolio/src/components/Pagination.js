import { useContext } from "react";
import { usePagination } from "../Providers/PaginationProvider";
import { ThemeContext } from "../Providers/ThemeProvider";

export const Pagination = () => {
    const { currentPage,nextPage,prevPage,totalPages,itemsPerPage,setCurrentPage} = usePagination();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end'}}>

       <button
              style={{
                backgroundColor: (theme=='dark-theme')?'rgb(89 89 89)':'#f7f7f7',
                color: (theme=='dark-theme')? '#fff' : '#333',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={prevPage} disabled={currentPage === 1}
            >
              Prev
        </button>

        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: '0 5px' }}>
            <button
              style={{
                backgroundColor: currentPage === number ? (theme=='dark-theme')?'rgb(89 89 89)':'#f7f7f7' : (theme=='dark-theme')?'#333':'#fff',
                color: (theme=='dark-theme')? '#fff' : '#333',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentPage(number)} 
            >
              {number}
            </button>
          </li>
        ))}

        <button
              style={{
                backgroundColor: (theme=='dark-theme')?'rgb(89 89 89)':'#f7f7f7',
                color: (theme=='dark-theme')? '#fff' : '#333',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={nextPage} disabled={currentPage === totalPages}
            >
              Next
        </button>
      </ul>
    );
  };