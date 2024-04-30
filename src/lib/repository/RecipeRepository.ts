import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IRecipe } from "../interfaces/IRecipe";
import { IProduct } from "../interfaces/IProducts";

export const getOwnProducts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products/own-products`,
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
