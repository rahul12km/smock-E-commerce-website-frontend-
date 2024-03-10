import React, { useState, useEffect } from "react";

const useFilter = (initialData) => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState([]);

  const applyFilters = () => {
    let filteredData = [...initialData];
    filters.forEach((filter) => {
      filteredData = filteredData.filter(filter);
    });
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
    applyFilters();
  }, [filters, initialData]);

  return { data, addFilter, removeFilter, resetFilters };
};

export default useFilter;
