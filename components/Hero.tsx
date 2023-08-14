"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetBanner } from "@/hooks/useGetBanner";
import { TBanner } from "@/types/types";
import { urlFor } from "@/client";

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
    <section className="w-full flex md:flex-row flex-col items-center justify-between h-full rounded-2xl shadow-lg gap-1 bg-white relative">
      <div className="w-full max-w-[800px] h-[40vh] bg-blue-500">
        <Slider {...settings}>
          {data?.map((item: TBanner) => (
            <section key={item._id} className="bg-red-500">
              <Image src={urlFor(item.image.asset._ref).width(1200).url()} width={1200} height={500} alt={item.alt} className="object-contain w-full h-[40vh]" />
            </section>
          ))}
          <div className="w-full">4</div>
        </Slider>
      </div>
      <div className="flex h-full md:h-[40vh] w-full md:flex-col gap-1 flex-row">
        <div className="w-full max-w-xs lg:max-w-lg h-1/2 bg-red-500">Column 1</div>
        <div className="w-full max-w-xs lg:max-w-lg h-1/2 bg-red-500">Clumn 2</div>
      </div>
      <div className="flex h-full md:h-[40vh] w-full md:flex-col gap-1 flex-row">
        <div className="w-full max-w-xs lg:max-w-lg h-1/2 bg-red-500">Column 1</div>
        <div className="w-full max-w-xs lg:max-w-lg h-1/2 bg-red-500">Clumn 2</div>
      </div>
    </section>
  );
};

export default Hero;
