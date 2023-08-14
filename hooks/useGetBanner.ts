import { client } from "@/client";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "./getBanner";

export const useGetBanner = () => {
  const { data, isFetching, isError, isLoading, isSuccess } = useQuery(["banner"], () => client.fetch(getBanner()), {
    refetchOnWindowFocus: false,
  });
  return { data, isFetching, isError, isLoading, isSuccess };
};
