import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IProfile } from "../interfaces/IProfile";

export const getProfile = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/auth/user`,
    fetcher
  );

  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.user as IProfile,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
