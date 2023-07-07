"use client";

import { Roboto } from "next/font/google";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], adjustFontFallback: true });

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className={`${roboto.className} flex items-center  relative`}>
      <input type="text" placeholder="Ketik kata kunci pencarian" className="px-4 shadow-md placeholder:text-black/40 py-2 group outline-none min-w-[200px] bg-slate-50 focus:bg-violet-50 transition duration-300 rounded-l-lg" />
      <button className=" p-[9px] group-focus:bg-slate-50 hover:bg-violet-500 group-focus:text-black shadow-md text-white transition duration-300 rounded-r-lg  bg-violet-400" aria-label="buttonSearch" type="submit">
        <AiOutlineSearch size={24} />
      </button>
      <button className="p-2 ml-4 rounded-r-lg text-violet-400 hover:text-violet-500" aria-label="buttonSearch" type="button">
        <SlBasket size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
