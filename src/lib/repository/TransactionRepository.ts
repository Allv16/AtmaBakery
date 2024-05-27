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
    `${import.meta.env.VITE_BASE_API}/transaksi-admin/todo`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
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

    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Updated Delivery Range");
      mutate(`${import.meta.env.VITE_BASE_API}/transaksi-admin/todo`);
    }
  } catch (error) {
    console.log(error);

    toast.error(`Failed to update delivery range: ${error}`);
  }
};

export const getOnProcessTransaction = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi-admin/on-process`,
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

export const updateTransactionReady = async (id: string) => {
  try {
    const response = await axiosInstance().put(
      `${import.meta.env.VITE_BASE_API}/transaksi/ready/${id}`
    );

    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Updated Transaction Status");
      mutate(`${import.meta.env.VITE_BASE_API}/transaksi-admin/on-process`);
    }
  } catch (error) {
    console.log(error);

    toast.error(`Failed to update delivery range: ${error}`);
  }
};

export const addTransaction = async (data: any) => {
  try {
    const response = await axiosInstance().post(
      `${import.meta.env.VITE_BASE_API}/transaksi`,
      data
    );

    if (response.status.toString().startsWith("20")) {
      toast.success("Checkout success, Please wait for the admin to confirm");
    }
  } catch (error) {
    toast.error(`Failed to Checkout: ${error}`);
  }
};

export const getTransactionById = (id: string) => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi/id/${id}`,
    fetcher
  );
  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.transaksi as ITransaction,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export const getTransactionForMOTodo = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/transaksi-mo/todo`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.transaksi as ITransaction[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
