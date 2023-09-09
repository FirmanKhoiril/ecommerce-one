"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button, Input } from "./";

const SearchBar = () => {
  const router = useRouter();
  const { searchTerm, setSearchTerm } = useGlobalState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className={` flex flex-grow  items-center justify-center relative`}>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari Product"
        inputStyle="px-4 shadow-md bg-blue-50 border-blue-500/60 placeholder:text-black/50 py-2 peer focus:bg-blue-100  focus:border-blue-500 border outline-none  grow min-w-[300px] max-w-[500px] font-light rounded-l-sm transition rounded-r-lg duration-300"
      />
      {searchTerm.length > 0 ? <Button name="buttonClear" label="buttonClear" type="button" className="absolute rounded-full p-1 right-12" icon={<AiOutlineClose size={18} />} /> : ""}
      <Button
        name="buttonSearch"
        className=" p-[9px] peer-focus:bg-primary/80 absolute right-0 hover:bg-primary/80 shadow-md text-white transition duration-[0.4s] rounded-lg bg-primary"
        label="buttonSearch"
        type="submit"
        icon={<AiOutlineSearch size={24} />}
      />
    </form>
  );
};

export default SearchBar;
