import { client } from "@/client";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "./getAllProduct";

export const useGetAllProduct = () => {
  const { data, isFetching, isError, isLoading, isSuccess } = useQuery(["product"], () => client.fetch(getAllProduct()), {
    refetchOnWindowFocus: false,
  });
  return { data, isFetching, isError, isLoading, isSuccess };
};
