"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { Button, SosialMedia } from "./";
import { AiOutlineClose } from "react-icons/ai";
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
        <SosialMedia />
      </aside>
    </>
  );
};

export default Sidebar;
