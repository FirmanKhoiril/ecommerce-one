"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Button } from "./";

const SearchMobile = () => {
  const router = useRouter();
  const { setActiveSearchMobile, setSearchTerm, searchTerm, activeSearchMobile } = useGlobalState();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };
  return (
    <>
      {activeSearchMobile ? <div className={`${activeSearchMobile ? "opacity-100" : "opacity-0"} bg-black/40  transition duration-300 lg:hidden block w-full z-10 fixed h-screen`} onClick={() => setActiveSearchMobile(false)} /> : ""}
      <nav className={`fixed top-0 bg-white z-30 lg:hidden flex ease-in transition duration-150 p-2 w-full ${activeSearchMobile ? "translate-y-[0%] opacity-100" : "translate-y-[-110%] opacity-0"}`}>
        <form onSubmit={handleSubmitSearch} className="flex flex-grow items-center">
          <Button type="button" onClick={() => setActiveSearchMobile(false)} name="buttonCloseSearch" className="p-2 hover:text-primary rounded-full" label="buttonCloseSearch" icon={<IoIosArrowRoundBack size={28} />} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Produk..."
            className=" bg-blue-50 border border-blue-100 focus:bg-blue-100 focus:placeholder:text-black/60 rounded-full focus:border-blue-300 outline-none py-2 px-4 w-full grow mx-[6px]"
          />
          <Button type="submit" name="buttonCloseSearch" className="p-2 hover:text-primary rounded-full" label="buttonCloseSearch" icon={<AiOutlineSearch size={25} />} />
        </form>
      </nav>
    </>
  );
};

export default SearchMobile;
