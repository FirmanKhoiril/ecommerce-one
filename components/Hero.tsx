"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Hero = () => {
  return <section className={`w-full rounded-xl shadow-sm relative min-h-[42vh]  bg-white text-black/90  h-auto`}>Hero</section>;
};

export default Hero;
