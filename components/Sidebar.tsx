"use client";

import { useGlobalState } from "@/hooks/useGlobalState";

const Sidebar = () => {
  const { activeSidebar, setActiveSidebar } = useGlobalState();
  return (
    <>
      {activeSidebar ? <div className={`${activeSidebar ? "opacity-100" : "opacity-0"} bg-black/40  transition duration-300 w-full z-10 fixed h-screen`} onClick={() => setActiveSidebar(false)} /> : ""}
      <aside className={`fixed max-w-[280px] sm:max-w-xs w-full top-[64px] ${activeSidebar ? "translate-x-[0%]" : "translate-x-[-100%]"} transition duration-300 z-20 h-screen left-0 bg-white py-4 px-2`}>Sidebar</aside>
    </>
  );
};

export default Sidebar;
