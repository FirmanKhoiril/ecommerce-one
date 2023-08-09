import { urlFor } from "@/client";
import { ICardProduct } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const Card = ({ name, price, normalPrice, city, image, discount, slug: { current } }: ICardProduct) => {
  return (
    <div className="w-[180px] bg-white hover:translate-y-[-4px] group transition duration-300 rounded-lg relative h-auto pb-2 ">
      <Link href={`/product/${current}`} className="flex items-start flex-col gap-1">
        <Image style={{ width: "auto", height: "auto" }} src={urlFor(image[0]?.asset?._ref).width(300).url()} loading="lazy" className="rounded-lg" quality={100} alt={image[0]?.alt} width={300} height={150} />

        <div className="px-3 py-1 flex flex-col gap-[2px]">
          <h1 className=" text-sm">{name}</h1>
          <p className="text-primary font-bold tracking-wide">Rp{price}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-red-200 px-[3px] rounded-lg">
              <p className="text-[12px] text-red-500">{discount}%</p>
            </div>
            <p className="text-slate-500 text-[12px] relative">
              Rp{normalPrice}
              <span className="absolute w-[110%] h-[1px] -right-1 bottom-[10px] bg-black/40"></span>
            </p>
          </div>
          <p className="text-slate-600 tracking-widest text-[14px] uppercase">KOTA {city}</p>
          <div className="mt-2">
            <button name="detail" aria-label="detail" type="button" className="w-[70%] hover:bg-primary shadow-sm bg-primary/80 text-white rounded-md py-[6px] md:px-4 md:py-2 text-sm">
              Lihat Detail
            </button>
          </div>
        </div>
      </Link>
      <button name="tambahkanCart" aria-label="tambahkanCart" type="button" className="p-2 md:p-[10px] hover:bg-blue-300 rounded-full bg-blue-200 absolute bottom-0 right-0 m-3 z-10 shadow-sm">
        <SlBasket size={16} />
      </button>
    </div>
  );
};

export default Card;
