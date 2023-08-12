"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { Roboto } from "next/font/google";
import { AiOutlineSearch } from "react-icons/ai";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], adjustFontFallback: true });

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className={`${roboto.className} flex flex-grow items-center justify-center relative`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari Product"
        className="px-4 shadow-md bg-blue-50 placeholder:text-black/50 py-2 peer focus:bg-blue-100 focus:border-blue-500/60 border border-transparent outline-none  grow min-w-[300px] max-w-[500px] transition duration-300 rounded-l-full"
      />
      <button className=" p-[9px] peer-focus:bg-primary/80 hover:bg-primary/80 shadow-md text-white transition duration-[0.4s] rounded-r-full bg-primary" aria-label="buttonSearch" type="submit">
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
