"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { categories } from "@/utils/constan";
import Image from "next/image";

const Categories = () => {
  const { category, setCategory } = useGlobalState();
  return (
    <div className="mt-5">
      <div className="flex w-full py-1 justify-between">
        <p className="uppercase text-primary font-bold tracking-wide">Kategori</p>
        <button type="button" name="buttonSeeAll" aria-label="buttonSeeAll" className="text-[13px] tracking-wide text-primary/80">
          Lihat Semua
        </button>
      </div>
      <div className="py-2 flex overflow-x-auto scrollbar-none w-full">
        <div className="flex gap-2 items-center w-full">
          {categories.map((item) => (
            <button
              key={item.name}
              type="button"
              name={item.name}
              onClick={() => setCategory(item.title)}
              aria-label={item.label}
              className={`flex flex-col min-w-[100px] md:min-w-[120px] ${
                category === item.title ? "bg-primary text-white" : "bg-white text-black"
              } hover:bg-primary hover:text-white transition duration-300 items-center gap-1 shadow-md rounded-lg py-2 md:py-3`}
            >
              <Image src={item.icon} className="object-contain md:h-10 h-8 w-8 md:w-10" loading="lazy" alt={item.title} />
              <p className="text-[12px] md:text-sm capitalize">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
