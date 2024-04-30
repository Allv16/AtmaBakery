import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IIngredients } from "../interfaces/IIngredients";

export const getAllIngredients = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/ingredients`,
    fetcher
  );
  console

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.ingredients as IIngredients[],
    error,
    isLoading,
    isValidating,
  };
};
