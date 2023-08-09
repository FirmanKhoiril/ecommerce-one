"use client";

import { Card, Discount, Hero, Categories } from "@/components";
import { useGetProduct } from "@/hooks/useGetProduct";
import { TCardProduct } from "@/utils/types";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { data, isLoading, isFetching, isSuccess } = useGetProduct();

  return (
    <main className="flex flex-col w-full container py-4 px-2 mx-2 md:px-14">
      <Hero />
      <Discount />
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
