"use client";

import { Roboto } from "next/font/google";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], adjustFontFallback: true });

const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className={`${roboto.className} flex flex-grow items-center justify-center relative`}>
      <input type="text" placeholder="Cari Product" className="px-4 shadow-md bg-blue-50 placeholder:text-black/50 py-2 peer outline-none  grow min-w-[300px] max-w-[500px] transition duration-300 rounded-l-lg" />
      <button className=" p-[9px] hover:bg-primary/80 shadow-lg text-white transition duration-[0.4s] rounded-r-lg bg-primary" aria-label="buttonSearch" type="submit">
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
