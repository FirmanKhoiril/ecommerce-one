"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetBanner } from "@/hooks/useGetBanner";
import { TBanner } from "@/types/types";
import { urlFor } from "@/client";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Hero = () => {
  const { data } = useGetBanner();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={`  w-full ${poppins.className} rounded-2xl shadow-lg bg-emerald-400 text-white/90  h-auto`}>
      <Slider {...settings}>
        <>
          {data?.map((item: TBanner) => (
            <div key={item._id} className={`flex sm:px-6 px-4 md:px-14 lg:px-20  items-center  py-8 md:py-14 md:flex-row flex-col flex-wrap justify-around  relative gap-8 md:gap-2 `}>
              <div className="flex flex-col gap-2 max-w-[450px]">
                <div className="flex flex-col">
                  <h1 className="font-bold text-3xl md:text-4xl tracking-tight">{item.bigText}</h1>
                  <div className="flex items-center leading-[46px] md:leading-[54px] gap-2">
                    <h3 className="text-[18px] md:text-[28px] tracking-tight  font-semibold text-white/60">Diskon</h3>
                    <p className="text-[34px] md:text-[40px] font-semibold">{item.discount}%</p>
                  </div>
                  <div className="flex gap-4 tracking-tight items-center">
                    <div className="relative ">
                      <span className="absolute h-[2px] bg-white/70 bottom-[13px] w-[94px] -left-[3px]"></span>
                      <p className="text-white/80  text-lg">Rp{item.normalPrice}</p>
                    </div>
                    <h1 className="text-4xl font-bold">Rp{item.price}</h1>
                  </div>
                </div>
                <Link href={`/product/${item.buttonLink}`}>
                  <button type="button" name="buttonLink" aria-label="buttonLink" className="py-2 px-4 hover:bg-white transition duration-300 mt-2 hover:drop-shadow-lg rounded-md drop-shadow-md bg-white/80 text-emerald-400">
                    Lihat Detail
                  </button>
                </Link>
              </div>
              <div className="flex flex-col items-start max-w-[450px] gap-2">
                <Image src={urlFor(item.image.asset._ref).width(600).url()} alt={item.alt} width={300} height={300} className="object-contain drop-shadow-2xl" />
                <div className="gap-1 flex flex-col">
                  <h1 className="text-white font-semibold text-xl">{item.title}</h1>
                  <p className="opacity-90 text-[15px]">{item.description}.</p>
                </div>
              </div>
            </div>
          ))}
        </>
      </Slider>
    </section>
  );
};

export default Hero;
