import useSWR, { mutate } from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPartnerReport } from "../interfaces/IPartnerReport";

export const getAllPartnerReport = (year: string, month: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${
      import.meta.env.VITE_BASE_API
    }/laporan/partner-transaction-reports?year=${year}&month=${month}`,
    fetcher
  );

  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.Report as IPartnerReport[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
