"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

const SearchMobile = () => {
  const { setActiveSearchMobile, activeSearchMobile } = useGlobalState();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      {activeSearchMobile ? <div className={`${activeSearchMobile ? "opacity-100" : "opacity-0"} bg-black/40  transition duration-300 lg:hidden block w-full z-10 fixed h-screen`} onClick={() => setActiveSearchMobile(false)} /> : ""}
      <nav className={`fixed top-0 bg-white z-30 lg:hidden flex ease-in transition duration-150 p-2 w-full ${activeSearchMobile ? "translate-y-[0%] opacity-100" : "translate-y-[-110%] opacity-0"}`}>
        <form onSubmit={handleSubmitSearch} className="flex flex-grow items-center">
          <button type="button" onClick={() => setActiveSearchMobile(false)} name="buttonCloseSearch" className="p-2 hover:text-primary rounded-full" aria-label="buttonCloseSearch">
            <IoIosArrowRoundBack size={28} />
          </button>
          <input type="text" placeholder="Cari Produk..." className=" bg-blue-50 focus:bg-blue-100 rounded-full outline-none py-2 px-4 w-full grow mx-[6px]" />
          <button type="submit" name="buttonCloseSearch" className="p-2 hover:text-primary rounded-full" aria-label="buttonCloseSearch">
            <AiOutlineSearch size={25} />
          </button>
        </form>
      </nav>
    </>
  );
};

export default SearchMobile;