"use client";

import { useGlobalState } from "@/hooks/useGlobalState";
import { categories } from "@/utils/constan";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Poppins } from "next/font/google";
import { Button } from "./";
import { Box } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Categories = () => {
  const { category, setCategory } = useGlobalState();
  return (
    <Box sx={{ mt: 2 }} className={`${poppins.className}`}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5 }} className="w-full">
        <p className="uppercase text-primary font-[400] cursor-default tracking-wide">Kategori</p>
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
      </Box>
      <Box sx={{ py: 1, display: "flex", overflowX: "auto" }} className="scrollbar-none w-full">
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", width: "100%" }}>
          {categories.map((item) => (
            <Button
              key={item.name}
              type="button"
              name={item.name}
              title={item.title}
              textClassName="text-[12px] md:text-sm capitalize"
              onClick={() => setCategory(item.tag)}
              label={item.label}
              className={`flex flex-col ${item.title.length < 8 ? "min-w-[70px] md:min-w-[80px]" : "min-w-[110px] md:min-w-[125px]"} ${
                category === item.tag ? "bg-primary text-white" : "bg-white/80 text-black hover:bg-blue-300"
              } transition duration-200  items-center gap-1 shadow-[0px_1px_2px_1px] shadow-black/10 rounded-lg py-[9px]`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
