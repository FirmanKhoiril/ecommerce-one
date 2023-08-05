"use client";

import { Card, Hero, SearchBar } from "@/components";
import Categories from "@/components/Categories";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGlobalState } from "@/hooks/useGlobalState";

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
  const { category } = useGlobalState();

  const { data, isLoading, isFetching, isError, isSuccess } = useGetProduct(category);

  return (
    <main className="flex flex-col w-full py-4 px-2 md:px-14">
      <Hero />

      <Categories />
      <div className="flex overflow-x-auto scrollbar-none gap-2 py-10">{isSuccess ? data?.map((product: TCardProduct) => <Card key={product._id} {...product} />) : ""}</div>
    </main>
  );
}
