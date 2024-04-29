import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IProduct } from "../interfaces/IProducts";

export const getAllProcuts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products/random`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.products as IProduct[],
    error,
    isLoading,
    isValidating,
  };
};
