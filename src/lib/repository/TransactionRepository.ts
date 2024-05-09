import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { ITransaction } from "../interfaces/ITransaction";

export const getAllTransactionByIdCustomer = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi/${id}`,
    fetcher
  );

  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
    console.log(error);
  }

  return {
    data: data?.transaksi as ITransaction[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
