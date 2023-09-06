"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetBanner } from "@/hooks/useGetBanner";
import { TBanner } from "@/types/types";
import { SlBasket } from "react-icons/sl";
import { urlFor } from "@/client";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";
import { Button } from "./";
import { Poppins } from "next/font/google";
import { Box } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Hero = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetBanner();

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

  if (isLoading && isFetching) return <div className="h-[42vh] bg-white w-full flex justify-center items-center"></div>;
  if (isError) return <div className="">Error</div>;

  return (
    <Slider {...settings} className={`w-full rounded-xl shadow-sm relative min-h-[42vh]  bg-white text-black/90  h-auto`}>
      {isSuccess &&
        data?.map((item: TBanner) => (
          <section key={item._id}>
            <div className={`flex px-[10px] items-center  py-8  md:flex-row flex-col flex-wrap justify-around  relative gap-8 md:gap-2 `}>
              <div className="flex flex-col gap-3 w-full max-w-[450px]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-[700] text-3xl md:text-4xl leading-10 tracking-tight">{item.bigText}</h1>
                  <p className="text-slate-500 text-sm md:text-[16px]">{item.description}.</p>
                </div>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
                  <Link href={`/product/${item.buttonLink}`}>
                    <Button
                      type="button"
                      name="buttonLinkDetail"
                      label="buttonLinkDetail"
                      className="py-2 px-2 md:px-4 hover:bg-slate-200 transition duration-300 hover:drop-shadow-lg flex gap-2 items-center rounded-md text-sm md:text-base drop-shadow-md bg-slate-100 text-primary"
                      icon={<BiDetail className="md:text-[20px] text-[15px]" />}
                      title="Lihat Detail"
                    />
                  </Link>
                  <Button
                    title="Add to Cart"
                    name="buttonAddCart"
                    label="buttonAddCart"
                    className="py-2 px-2 md:px-4 flex transition duration-300 hover:bg-primary hover:drop-shadow-lg rounded-md text-sm md:text-base  text-white items-center gap-2 drop-shadow-md bg-primary/80"
                    icon={<SlBasket className="md:text-[20px] text-[15px]" />}
                    type="button"
                  />
                </Box>
              </div>
              <div className={` ${poppins.className} flex flex-col w-full items-start md:max-h-[300px] max-h-[260px] max-w-[450px] gap-2`}>
                <Image src={urlFor(item.image.asset._ref).url()} alt={item.alt} width={300} height={300} className="object-contain md:max-w-[300px] md:max-h-[300px] max-h-[260px] wmax-w-[260px] drop-shadow-xl" />
              </div>
            </div>
          </section>
        ))}
    </Slider>
  );
};

export default Hero;
