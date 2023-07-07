import SearchBar from "./SearchBar";
import { Lobster_Two } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });
const Navbar = () => {
  return (
    <nav className={`bg-white ${lobster.className} p-3 shadow-md sticky top-0 flex justify-between md:justify-around items-center`}>
      <h1 className="text-3xl text-purple-400 font-bold">Nabila Beauty</h1>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
