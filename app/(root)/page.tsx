"use client";

import { Card, Discount, Hero, Categories } from "@/components";
import { useGetProduct } from "@/hooks/useGetProduct";
import { TCardProduct } from "@/types/types";
import { Container } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const { data, isLoading, isFetching, isSuccess } = useGetProduct();

  if (isLoading && isFetching)
    return (
      <div className="w-full flex items-center min-h-screen justify-center">
        <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={["#4E30FA", "#2A40DE", "#3B82F6", "#2A9EDE", "#30E8FA"]} />
      </div>
    );

  return (
    <Container>
      <main className="flex flex-col py-4">
        <Hero />
        <Discount />
        <Categories />
        <div className="flex justify-center items-center gap-[6px] py-4">{isSuccess ? data?.map((product: TCardProduct) => <Card key={product._id} {...product} />) : ""}</div>
      </main>
    </Container>
  );
}
