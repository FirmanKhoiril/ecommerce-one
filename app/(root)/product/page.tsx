"use client";

import { Card } from "@/components";
import { useGetAnyProduct } from "@/hooks/useGetAnyProduct";
import { TCardProduct } from "@/types/types";
import { Container } from "@mui/material";

export default function ProductPage() {
  const { data, isLoading, isError, isFetching, isSuccess } = useGetAnyProduct();

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", alignItems: "center", py: 4 }}>
      {data?.map((item: TCardProduct) => (
        <Card {...item} key={item._id} />
      ))}
    </Container>
  );
}
