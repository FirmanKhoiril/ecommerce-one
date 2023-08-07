"use client";

import { useState, useContext, createContext } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [category, setCategory] = useState("all");
  const [activeSearchMobile, setActiveSearchMobile] = useState(false);
  return <StateContext.Provider value={{ activeSidebar, activeSearchMobile, setActiveSearchMobile, setActiveSidebar, category, setCategory }}>{children}</StateContext.Provider>;
};

export const useGlobalState = (): any => useContext(StateContext);
