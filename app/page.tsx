"use client";

import { Card, Hero } from "@/components";
import Categories from "@/components/Categories";
import { useGetProduct } from "@/hooks/useGetProduct";
import { ColorRing } from "react-loader-spinner";

type TCardProduct = {
  name: string;
  price: string;
  normalPrice: string;
  discount: number;
  city: string;
  _id: string;
  image: any;
  details: string;
  tags: [string];
  slug: {
    current: string;
  };
};

export default function Home() {
  const { data, isLoading, isFetching, isSuccess } = useGetProduct();

  return (
    <main className="flex flex-col w-full container py-4 px-2 md:px-14">
      <Hero />

      <Categories />
      <div className="flex overflow-x-auto scrollbar-none gap-2 py-4">
        {isLoading && isFetching ? (
          <div className="w-full flex items-center justify-center">
            <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={["#4E30FA", "#2A40DE", "#3B82F6", "#2A9EDE", "#30E8FA"]} />
          </div>
        ) : isSuccess ? (
          data?.map((product: TCardProduct) => <Card key={product._id} {...product} />)
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
