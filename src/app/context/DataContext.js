"use client";

import { createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children, data }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);