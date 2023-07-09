import Link from "next/link";
import SearchBar from "./SearchBar";
import { AiOutlineMenu } from "react-icons/ai";
import { Lobster_Two } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  return (
    <nav className={`bg-white ${lobster.className} p-2 shadow-md sticky top-0 z-10 flex justify-between md:justify-around items-center`}>
      <button type="button" name="buttonMenu" aria-label="buttonMenu" className="md:hidden flex p-2 rounded-full hover:text-purple-300">
        <AiOutlineMenu size={20} />
      </button>
      <Link href={"/"}>
        <h1 className="text-2xl md:text-3xl hidden md:flex text-purple-400 font-bold">
          Nabila <br className="md:hidden inline-block" /> Beauty
        </h1>
      </Link>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
