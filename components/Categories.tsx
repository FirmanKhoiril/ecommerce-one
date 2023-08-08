"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { categories } from "@/utils/constan";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Categories = () => {
  const { category, setCategory } = useGlobalState();
  return (
    <div className="mt-5">
      <div className="flex w-full py-1 items-center justify-between">
        <p className="uppercase text-primary font-[500] cursor-default tracking-wide">Kategori</p>
        <Link href={"/product"} aria-label="buttonSeeAll" className="text-[13px]  text-primary/80 flex gap-1 bg-white px-2 py-1 rounded-md hover:text-primary items-center">
          Lihat Semua
          <BsArrowRight size={15} />
        </Link>
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
              className={`flex flex-col hover:-translate-y-1 min-w-[100px] md:min-w-[120px] ${
                category === item.title ? "bg-primary text-white" : "bg-white text-black"
              } transition duration-300 items-center gap-1 shadow-md rounded-lg py-2 md:py-3`}
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
