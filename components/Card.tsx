import { urlFor } from "@/client";
import Image from "next/image";
import Link from "next/link";

interface ICardProduct {
  name: string;
  price: string;
  normalPrice: string;
  discount: number;
  city: string;
  _id: string;
  details: string;
  image: any;
  tags: [string];
  slug: {
    current: string;
  };
}

const Card = ({ name, price, normalPrice, city, details, image, discount, tags, slug: { current } }: ICardProduct) => {
  return (
    <Link href={`/${current}`} className="w-[200px] bg-white group shadow-md hover:shadow-black/10 rounded-t-lg relative h-80 flex items-start flex-col gap-1">
      <Image src={urlFor(image[0]?.asset?._ref).url()} loading="lazy" quality={100} alt={image[0]?.alt} width={190} height={120} className="object-cover" />
      <div className="absolute top-0 left-0 h-10 w-10 text-sm text-center bg-yellow-400 shadow-md rounded-br-md ">
        <p className="text-red-600">{discount}%</p>
        <p className="text-white">OFF</p>
      </div>
      <div className="px-2 py-1 flex flex-col gap-[2px]">
        <h1 className=" text-md">{name}</h1>
        <div className="flex items-center gap-3 text-sm">
          <p className="text-slate-500 relative">
            Rp{normalPrice}
            <span className="absolute w-[110%] h-[1px] -right-1 bottom-[10px] bg-black/40"></span>
          </p>
          <p className="text-primary tracking-wide">Rp{price}</p>
        </div>
        <p className="text-slate-600 tracking-widest text-[15px] uppercase">KOTA {city}</p>
      </div>
    </Link>
  );
};

export default Card;
