import { toast } from "sonner";
import useSWR, { mutate } from "swr";
import { ITransaction } from "../interfaces/ITransaction";
import { axiosInstance, fetcher } from "../utils/utils";

export const getAllTransactionByIdCustomer = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi/${id}`,
    fetcher
  );

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

export const getAllTransactionAdminToDo = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi-admin`,
    fetcher
  );

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

export const updateDeliveryRange = async (
  id: string,
  range: number,
  fee: number
) => {
  const body = {
    jarak_pengiriman: range,
    biaya_pengiriman: fee,
  };
  try {
    const response = await axiosInstance().put(
      `${import.meta.env.VITE_BASE_API}/delivery/edit/range/${id}`,
      {
        ...body,
      }
    );
    console.log(response);

    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Updated Delivery Range");
    }
  } catch (error) {
    console.log(error);

    toast.error(`Failed to update delivery range: ${error}`);
  }
};

export const getTransactionById = (id: string) => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi/id/${id}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  console.log(data);
  return {
    data: data?.transaksi as ITransaction,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
