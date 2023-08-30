"use client";

import Link from "next/link";
import { Button } from "./";
import { IoMdArrowBack } from "react-icons/io";
import { Lobster_Two } from "next/font/google";
import { useRouter } from "next/navigation";

const lobster = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"], adjustFontFallback: true });

const NavLogin = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <nav className="bg-white w-full p-2 drop-shadow-sm flex items-center justify-between">
      <Button onClick={handleBack} name="buttonBack" label="buttonBack" type="button" className="p-3 transition duration-150 hover:bg-slate-100 rounded-full" icon={<IoMdArrowBack size={25} />} />
      <Link href={"/"}>
        <h1 className={`text-3xl md:text-4xl flex text-primary font-bold ${lobster.className}`}>Nabila Beauty</h1>
      </Link>
      <Button type="button" className="" name="" label="" />
    </nav>
  );
};

export default NavLogin;
