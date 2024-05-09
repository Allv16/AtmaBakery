import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IHistory } from "../interfaces/IHistory";
import axios from "axios";

export const getHistoryTransaction = (id_customer: string) => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi/history/${id_customer}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }
  return {
    dataHistory: data as IHistory[],
    errorHistory: error,
    isLoadingHistory: isLoading,
    isValidatingHistory: isValidating,
  };
};
