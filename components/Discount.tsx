import { BsArrowRight } from "react-icons/bs";
import { Button, PromoCard } from "./";
import Link from "next/link";

const Discount = () => {
  return (
    <section className="py-4 w-full">
      <div className="flex justify-between items-center">
        <p className="uppercase text-primary font-[400] cursor-default tracking-wide">Paket</p>
        <Link href={"/product"}>
          <Button
            type="button"
            title="Lihat Semua"
            icon={<BsArrowRight size={15} />}
            name="buttonSeeAll"
            label="buttonSeeAll"
            className="text-[13px]  text-primary/80 flex gap-1 bg-white px-2 py-1 rounded-md shadow-sm hover:text-primary items-center"
          />
        </Link>
      </div>
      <div className="flex gap-2 overflow-x-auto overflow-y-hidden py-2 scrollbar-none  px-1">
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </div>
    </section>
  );
};

export default Discount;
