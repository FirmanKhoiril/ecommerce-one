import { urlFor } from "@/client";
import { ICardProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { Button } from "./";

const Card = ({ name, price, normalPrice, city, image, discount, slug: { current } }: ICardProduct) => {
  return (
    <div className="w-[160px] bg-white hover:scale-[1.005] min-h-[280px] group hover:border-blue-500/60 border border-transparent h-auto relative sm:static pb-2 drop-shadow-sm hover:drop-shadow-lg">
      <Link href={`/product/${current}`} className="flex items-start flex-col gap-1">
        <Image src={urlFor(image[0]?.asset?._ref).width(300).url()} loading="lazy" quality={100} alt={image[0]?.alt} width={300} height={150} />
        <div className="px-1 sm:px-2 py-1 flex flex-col gap-[2px]">
          <h1 className=" text-sm">{name}</h1>
          <div className="bg-red-200 px-1 w-[33px] rounded-sm">
            <p className="text-[12px] text-red-500">{discount}%</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p className="text-slate-500 text-[12px] my-1 relative">
              Rp{normalPrice}
              <span className="absolute w-[110%] h-[1px] -right-1 bottom-[9px] bg-black/40"></span>
            </p>
            <p className="text-primary text-lg font-[600]">Rp{price}</p>
          </div>
          <p className="text-slate-600 text-[14px] uppercase">KOTA {city}</p>
        </div>
      </Link>
      <Button className="p-2 top-2 z-10 rounded-full drop-shadow-md opacity-0 group-hover:opacity-100 hover:bg-blue-100 right-2 absolute bg-white" type="button" name="buttonAddCart" label="buttonAddCard" icon={<SlBasket size={18} />} />
    </div>
  );
};

export default Card;
