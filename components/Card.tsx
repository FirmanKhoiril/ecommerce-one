import { urlFor } from "@/client";
import { ICardProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const Card = ({ name, price, normalPrice, city, image, discount, slug: { current } }: ICardProduct) => {
  return (
    <div className="w-[160px] md:w-[170px] bg-white hover:translate-y-[-4px] group transition duration-300  relative hover:border-blue-500/60 border border-transparent h-auto pb-2 drop-shadow-sm hover:drop-shadow-lg">
      <Link href={`/product/${current}`} className="flex items-start flex-col gap-1">
        <Image style={{ width: "auto", height: "auto" }} src={urlFor(image[0]?.asset?._ref).width(300).url()} loading="lazy" className="" quality={100} alt={image[0]?.alt} width={300} height={150} />

        <div className="px-2 py-1 flex flex-col gap-[2px]">
          <h1 className=" text-sm">{name}</h1>
          <p className="text-primary font-[600]">Rp{price}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-red-200 px-1">
              <p className="text-[12px] text-red-500">{discount}%</p>
            </div>
            <p className="text-slate-500 text-[12px] relative">
              Rp{normalPrice}
              <span className="absolute w-[110%] h-[1px] -right-1 bottom-[10px] bg-black/40"></span>
            </p>
          </div>
          <p className="text-slate-600 tracking-wider text-[14px] uppercase">KOTA {city}</p>
        </div>
      </Link>
      <button
        name="tambahkanCart"
        aria-label="tambahkanCart"
        type="button"
        className="p-2 md:p-[10px] hover:bg-blue-400 rounded-full bg-primary text-white absolute opacity-0 group-hover:opacity-100 transition duration-300 top-0 right-0 m-3 z-10 shadow-lg"
      >
        <SlBasket size={16} />
      </button>
    </div>
  );
};

export default Card;
