import React, { useState, useEffect } from "react";

const useFilter = (initialData) => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState([]);

  const applyFilters = () => {
    let filteredData = [...initialData];
    if (filters.length > 0) {
      filteredData = filteredData.filter((item) =>
        filters.every((filter) => {
          const { operand, opcode } = filter;
          return opcode(operand, item);
        })
      );
    }
    setData(filteredData);
  };

  const addFilter = (filterFunction) => {
    setFilters((prevFilters) => [...prevFilters, filterFunction]);
  };

  const removeFilter = (filterFunction) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterFunction)
    );
  };

  const resetFilters = () => {
    setFilters([]);
    setData(initialData);
  };

  useEffect(() => {
    console.log(filters);
    applyFilters();
  }, [filters, initialData]);

  return { data, addFilter, removeFilter, resetFilters };
};

export default useFilter;
