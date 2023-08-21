import { urlFor } from "@/client";
import { ICardProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { Button } from "./";
import { BsWhatsapp } from "react-icons/bs";

const Card = ({ name, price, normalPrice, city, image, discount, slug: { current } }: ICardProduct) => {
  return (
    <div className="w-[160px] bg-white min-h-[280px] transition duration-300  hover:border-blue-500/60 border overflow-hidden border-transparent h-auto pb-2 drop-shadow-sm hover:drop-shadow-lg group">
      <Link href={`/product/${current}`} className="flex items-start flex-col gap-1">
        <Image src={urlFor(image[0]?.asset?._ref).width(300).url()} loading="lazy" quality={100} alt={image[0]?.alt} width={300} height={150} />
        <div className="px-1 sm:px-2 py-1 flex flex-col gap-[2px]">
          <h1 className=" text-sm">{name}</h1>
          <p className="text-primary font-[600]">Rp{price}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-red-200 px-1 rounded-lg">
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
      <div className="h-full translate-x-[-100%] group-hover:translate-x-[0%] transition duration-500 absolute top-0 px-2 w-[140px] py-2 bg-primary text-white z-10 flex flex-col gap-2">
        <h1 className="font-semibold text-sm">Pemesanan Lewat</h1>
        <a href="" target="_blank">
          <Button
            title="Konsultasi"
            type="button"
            className="bg-green-500 drop-shadow-md rounded-md hover:bg-green-500/80 w-full flex items-center gap-2 px-2 py-2"
            name="buttonWhatsapp"
            label="buttonWhatsapp"
            icon={<BsWhatsapp size={18} />}
          />
        </a>
        <Button
          title="Add to Cart"
          type="button"
          className="bg-white drop-shadow-md rounded-md hover:bg-blue-100 text-black w-full flex items-center gap-2 px-2 py-2"
          name="buttonAddCart"
          label="buttonAddCart"
          icon={<SlBasket size={18} />}
        />
      </div>
    </div>
  );
};

export default Card;
