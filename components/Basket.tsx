"use client";

import { useGlobalState } from "@/hooks/useGlobalState";

const Basket = () => {
  const { setActiveBasket, activeBasket } = useGlobalState();
  return (
    <section
      className={`${
        activeBasket ? "translate-y-[0%]" : "translate-y-[-120%]"
      } transition duration-300 w-full fixed top-16 right-1 shadow-[0px_2px_4px_2px] shadow-black/10 max-w-[260px] md:max-w-xs bg-white px-4 py-2 rounded-b-lg overflow-y-auto max-h-80 h-full z-10 md:right-2  lg:right-6`}
    >
      test
    </section>
  );
};

export default Basket;
