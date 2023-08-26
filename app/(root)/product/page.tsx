"use client";

import { Card } from "@/components";
import { useGetAllProduct } from "@/hooks/useGetAllProduct";
import { TCardProduct } from "@/types/types";
import { Container } from "@mui/material";

export default function page() {
  const { data } = useGetAllProduct();
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", alignItems: "center", py: 4 }}>
      {data?.map((item: TCardProduct) => (
        <Card {...item} key={item._id} />
      ))}
    </Container>
  );
}
