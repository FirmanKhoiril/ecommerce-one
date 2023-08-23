"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "./";

const SearchBar = () => {
  const router = useRouter();
  const { searchTerm, setSearchTerm } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className={` flex flex-grow items-center justify-center relative`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari Product"
        className="px-4 shadow-md caret-blue-500 bg-blue-50 placeholder:text-black/50 py-2 peer focus:bg-blue-100 focus:border-blue-500/60 border border-transparent outline-none  grow min-w-[300px] max-w-[500px] transition duration-300"
      />
      <Button
        name="buttonSearch"
        className=" p-[9px] peer-focus:bg-primary/80 hover:bg-primary/80 shadow-md text-white transition duration-[0.4s] rounded-r-lg bg-primary"
        label="buttonSearch"
        type="submit"
        icon={<AiOutlineSearch size={24} />}
      />
    </form>
  );
};

export default SearchBar;
