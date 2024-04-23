import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";

export const getAllProcuts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/penitip`,
    fetcher
  );

  if (!isLoading && error) {
    console.log("MASUKKK");
    toast.error("Gagal mengambil data");
  }

  return {
    data,
    error,
    isLoading,
    isValidating,
  };
};
