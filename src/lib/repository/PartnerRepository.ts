import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPartner } from "../interfaces/IPartner";

export const getAllPartner = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/penitip`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.penitip as IPartner[],
    error,
    isLoading,
    isValidating,
  };
};
