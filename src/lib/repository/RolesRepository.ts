/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IRoles } from "../interfaces/IRoles";

export const getAllRoles = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/roles`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
    console.log(data);
  }

  return {
    data: data?.roles as IRoles[],
    error,
    isLoading,
    isValidating,
  };
};
