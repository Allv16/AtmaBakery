/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IHampers } from "../interfaces/IHampers";

export const getAllHampers = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/hampers`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.hampers as IHampers[],
    error,
    isLoading,
    isValidating,
  };
};
