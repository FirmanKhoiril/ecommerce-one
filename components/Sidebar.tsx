"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { sosialMedias } from "@/utils/constan";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./";
import Link from "next/link";
import { Lobster_Two } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"], adjustFontFallback: true });

const Sidebar = () => {
  const { activeSidebar, setActiveSidebar, setActiveSearchMobile } = useGlobalState();

  const handleSidebar = () => {
    setActiveSidebar((prev: boolean) => !prev);
    setActiveSearchMobile(false);
  };

  return (
    <>
      {activeSidebar ? <div className={`${activeSidebar ? "opacity-100" : "opacity-0"} bg-black/40  transition duration-300 w-full z-30 fixed h-screen`} onClick={() => setActiveSidebar(false)} /> : ""}
      <aside className={`fixed max-w-[280px] sm:max-w-xs flex flex-col justify-between w-full top-0 ${activeSidebar ? "translate-x-[0%]" : "translate-x-[-100%]"} transition duration-300 z-30 h-screen left-0 bg-white py-4 px-3`}>
        <div className="">
          <div className="flex items-center gap-3">
            <Button icon={<AiOutlineClose size={20} />} type="button" onClick={handleSidebar} name="buttonMenu" label="buttonMenu" className="p-[6px] bg-black/20  sm:p-2 rounded-full hover:opacity-80" />
            <Link href={"/"} onClick={() => setActiveSidebar(false)}>
              <h1 className={`text-3xl mt-2 md:text-3xl flex text-primary font-bold ${lobster.className}`}>Nabila Beauty</h1>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center gap-2">
          {sosialMedias.map((item) => (
            <Button
              key={item.name}
              type="button"
              className={`flex px-2 sm:px-3.5 sm:py-3 py-2 text-white ${item?.backgroundColor} transition duration-150 items-center drop-shadow-md rounded-lg`}
              name={item.name}
              label={item.label}
              icon={<span className="text-lg md:text-xl">{item.icon}</span>}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
