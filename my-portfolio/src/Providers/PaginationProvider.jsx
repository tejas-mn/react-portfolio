import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const usePagination = () => useContext(PaginationContext);

export const PaginationProvider = ({ children, itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const context = {
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    itemsPerPage,
    setCurrentPage,
    getPaginatedItems,
  };

  return (
    <PaginationContext.Provider value={context}>
      {children}
    </PaginationContext.Provider>
  );
};
