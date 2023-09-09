"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { Button, SosialMedia } from "./";
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import Link from "next/link";
import { Lobster_Two, Poppins } from "next/font/google";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"], adjustFontFallback: true });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"], adjustFontFallback: true });

const Sidebar = () => {
  const { activeSidebar, setActiveSidebar, setActiveSearchMobile } = useGlobalState();

  const handleSidebar = () => {
    setActiveSidebar((prev: boolean) => !prev);
    setActiveSearchMobile(false);
  };

  return (
    <>
      {activeSidebar ? <div className={`${activeSidebar ? "opacity-100" : "opacity-0"} bg-black/40  transition duration-300 w-full z-30 fixed h-screen`} onClick={() => setActiveSidebar(false)} /> : ""}
      <aside className={`fixed max-w-[280px] sm:max-w-xs flex flex-col justify-between w-full top-0 ${activeSidebar ? "translate-x-[0%]" : "translate-x-[-100%]"} transition duration-300 z-30 h-screen left-0 bg-white py-0 sm:py-4 px-3`}>
        <div className="">
          <div className="flex items-center gap-3 pb-4 sm:pb-10">
            <Button icon={<AiOutlineClose size={20} />} type="button" onClick={handleSidebar} name="buttonMenu" label="buttonMenu" className="p-[6px] mt-2 bg-primary/10  sm:p-2 rounded-full hover:opacity-80" />
            <Link href={"/"} onClick={() => setActiveSidebar(false)}>
              <h1 className={`text-3xl mt-2 md:text-3xl flex text-primary font-bold ${lobster.className}`}>Nabila Beauty</h1>
            </Link>
          </div>
          <div className={`pt-2 sm:pt-4 border-t border-black/20 ${poppins.className} font-light`}>
            <h1 className="text-lg">Theme</h1>
            <div className="flex flex-col gap-1 sm:gap-1.5 mt-1 sm:mt-4 sm:text-base text-sm">
              <Button icon={<AiFillSetting size={20} />} name="buttonDeviceMode" label="buttonLightMode" type="button" className="hover:bg-slate-100 px-2 py-2.5 sm:py-3 rounded-lg flex gap-2 items-center" title="Device Theme" />
              <Button icon={<BsFillSunFill size={20} />} name="buttonLightMode" label="buttonLightMode" type="button" className="hover:bg-slate-100 px-2 py-2.5 sm:py-3 rounded-lg flex gap-2 items-center" title="Light Theme" />
              <Button className="hover:bg-slate-100 px-2 py-2.5 sm:py-3 rounded-lg flex gap-2 items-center" title="Dark Theme" name="buttonDarkToogle" label="buttonDarkkToogle" type="button" icon={<MdDarkMode size={20} />} />
            </div>
          </div>
        </div>
        <SosialMedia />
      </aside>
    </>
  );
};

export default Sidebar;
