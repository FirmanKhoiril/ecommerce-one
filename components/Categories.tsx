"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { categories } from "@/utils/constan";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Poppins } from "next/font/google";
import { Button } from "./";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Categories = () => {
  const { category, setCategory } = useGlobalState();
  return (
    <div className={`mt-5 ${poppins.className}`}>
      <div className="flex w-full py-1 items-center justify-between">
        <p className="uppercase text-primary font-[500] cursor-default tracking-wide">Kategori</p>
        <Link href={"/product"}>
          <Button
            type="button"
            title="Lihat Semua"
            icon={<BsArrowRight size={15} />}
            name="buttonSeeAll"
            label="buttonSeeAll"
            className="text-[13px]  text-primary/80 flex gap-1 bg-white px-2 py-1 rounded-md shadow-sm hover:text-primary items-center"
          />
        </Link>
      </div>
      <div className="py-2 flex overflow-x-auto scrollbar-none w-full">
        <div className="flex gap-2 items-center w-full">
          {categories.map((item) => (
            <button
              key={item.name}
              type="button"
              name={item.name}
              onClick={() => setCategory(item.tag)}
              aria-label={item.label}
              className={`flex flex-col min-w-[110px] md:min-w-[125px] ${
                category === item.tag ? "bg-primary text-white -translate-y-1" : "bg-white/80 text-black hover:bg-primary"
              } transition duration-200  items-center gap-1 shadow-[0px_1px_2px_1px] shadow-black/10 rounded-lg py-[9px]`}
            >
              <p className="text-[12px] md:text-sm capitalize">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
