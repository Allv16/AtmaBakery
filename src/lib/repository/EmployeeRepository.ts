import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IEmployee } from "../interfaces/IEmployee";

export const getAllEmployee = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/karyawan`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.karyawan as IEmployee[],
    error,
    isLoading,
    isValidating,
  };
};
