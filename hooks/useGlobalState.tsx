"use client";

import { useState, useContext, createContext, useMemo } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchMobile, setActiveSearchMobile] = useState(false);

  const contextValue = useMemo(() => {
    return {
      searchTerm,
      setSearchTerm,
      activeSidebar,
      activeSearchMobile,
      setActiveSearchMobile,
      setActiveSidebar,
      category,
      setCategory,
    };
  }, [searchTerm, activeSidebar, activeSearchMobile, category]);

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};

export const useGlobalState = (): any => useContext(StateContext);
