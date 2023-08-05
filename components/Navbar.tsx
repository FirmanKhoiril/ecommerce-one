import Link from "next/link";
import SearchBar from "./SearchBar";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Lobster_Two } from "next/font/google";
import { SlBasket } from "react-icons/sl";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  return (
    <nav className={`bg-white ${lobster.className} p-3 shadow-md sticky top-0 z-10 flex justify-between lg:justify-around items-center`}>
      <div className="flex items-center gap-2">
        <button type="button" name="buttonMenu" aria-label="buttonMenu" className="p-2 rounded-full hover:opacity-80">
          <AiOutlineMenu size={20} />
        </button>
        <Link href={"/"}>
          <h1 className="text-2xl md:text-3xl flex text-primary font-bold">Nabila Beauty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex">
          <SearchBar />
        </div>
        <button className="p-2 ml-4 rounded-r-lg  hover:text-primary" aria-label="buttonSearch" type="button">
          <SlBasket size={24} />
        </button>
        <button className="p-2 rounded-r-lg lg:hidden inline-block  hover:text-primary" aria-label="buttonSearch" type="button">
          <AiOutlineSearch size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
