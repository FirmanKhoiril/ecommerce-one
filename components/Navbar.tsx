"use client";

import Link from "next/link";
import { Button, SearchBar } from "./";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Lobster_Two } from "next/font/google";
import { HiOutlineUserCircle } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { useGlobalState } from "@/hooks/useGlobalState";
import { Roboto } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"], adjustFontFallback: true });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], adjustFontFallback: true });

const Navbar = () => {
  const { setActiveSidebar, activeSidebar, setActiveSearchMobile } = useGlobalState();

  const handleSidebar = () => {
    setActiveSidebar((prev: boolean) => !prev);
    setActiveSearchMobile(false);
  };

  const handleSearchMobile = () => {
    setActiveSearchMobile((prev: boolean) => !prev);
    setActiveSidebar(false);
  };

  return (
    <nav className={`bg-white  p-3 shadow-md w-full sticky top-0 z-30 flex justify-between lg:justify-around items-center`}>
      <div className="flex items-center md:gap-2 gap-1">
        {activeSidebar ? (
          <Button icon={<AiOutlineClose size={20} />} type="button" onClick={handleSidebar} name="buttonClose" label="buttonClose" className="p-[6px] sm:p-2 rounded-full hover:opacity-80" />
        ) : (
          <Button icon={<AiOutlineMenu size={20} />} type="button" onClick={handleSidebar} name="buttonMenu" label="buttonMenu" className="p-[6px] sm:p-2 rounded-full hover:opacity-80" />
        )}
        <Link href={"/"}>
          <h1 className={`text-xl sm:text-2xl md:text-3xl flex text-primary font-bold ${lobster.className}`}>Nabila Beauty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <div className={` ${roboto.className} hidden lg:flex`}>
          <SearchBar />
        </div>
        <Button name="buttonSearch" onClick={handleSearchMobile} className="p-[6px] sm:p-2 rounded-full lg:hidden inline-block  hover:text-primary" label="buttonSearch" type="button" icon={<AiOutlineSearch size={24} />} />
        <Link href="/keranjang" className="relative">
          <Button
            type="button"
            title="0"
            textClassName=" absolute top-0 -right-1 z-10 border border-red-600 rounded-full text-[11px] px-[4px]"
            icon={<SlBasket size={24} />}
            name="buttonCart"
            className="p-[6px] sm:p-2 rounded-full  hover:text-primary"
            label="buttonCardBasket"
          />
        </Link>
        <Link href="/login">
          <Button type="button" name="buttonCart" className="p-[6px] sm:p-2 rounded-full  hover:text-primary" label="buttonCardBasket" icon={<HiOutlineUserCircle size={24} />} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
