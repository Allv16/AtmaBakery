import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { ICustomer } from "../interfaces/ICustomer";

export const getAllCustomer = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/customer`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.customer as ICustomer[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
