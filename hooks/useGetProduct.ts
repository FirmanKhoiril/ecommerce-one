import { client } from "@/client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./getProduct";

export const useGetProduct = (category: string) => {
  const { data, isFetching, isError, isLoading, isSuccess } = useQuery(["product", category], () => client.fetch(getProducts()), {
    refetchOnWindowFocus: false,
  });
  return { data, isFetching, isError, isLoading, isSuccess };
};
