import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPayment } from "../interfaces/IPayment";

export const payTransaction = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/pembayaran/bayar/${id}`,
    fetcher
  );

  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
    console.log(error);
  }

  return {
    data: data?.pembayaran as IPayment[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
