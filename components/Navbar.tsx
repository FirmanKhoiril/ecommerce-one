"use client";

import Link from "next/link";
import { SearchBar } from "./";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Lobster_Two } from "next/font/google";
import { HiOutlineUserCircle } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { useGlobalState } from "@/hooks/useGlobalState";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });

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
    <nav className={`bg-white ${lobster.className} p-3 shadow-md w-full sticky top-0 z-30 flex justify-between lg:justify-around items-center`}>
      <div className="flex items-center md:gap-2 gap-1">
        {activeSidebar ? (
          <button type="button" onClick={handleSidebar} name="buttonClose" aria-label="buttonClose" className="p-2 rounded-full hover:opacity-80">
            <AiOutlineClose size={20} />
          </button>
        ) : (
          <button type="button" onClick={handleSidebar} name="buttonMenu" aria-label="buttonMenu" className="p-2 rounded-full hover:opacity-80">
            <AiOutlineMenu size={20} />
          </button>
        )}
        <Link href={"/"}>
          <h1 className="text-lg sm:text-2xl md:text-3xl flex text-primary font-bold">Nabila Beauty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <div className="hidden lg:flex">
          <SearchBar />
        </div>
        <button name="buttonSearch" onClick={handleSearchMobile} className="p-2 rounded-full lg:hidden inline-block  hover:text-primary" aria-label="buttonSearch" type="button">
          <AiOutlineSearch size={24} />
        </button>
        <Link href="/keranjang">
          <button type="button" name="buttonCart" className="p-2 rounded-full  hover:text-primary" aria-label="buttonCardBasket">
            <SlBasket size={24} />
          </button>
        </Link>
        <Link href="/login">
          <button type="button" name="buttonCart" className="p-2 rounded-full  hover:text-primary" aria-label="buttonCardBasket">
            <HiOutlineUserCircle size={24} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
