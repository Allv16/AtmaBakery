import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPayment } from "../interfaces/IPayment";
import axios from "axios";

export const payTransaction = async (data: any, id: string) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/pembayaran/bayar/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Payment This Order");
      mutate(`${import.meta.env.VITE_BASE_API}/transaksi`);
    } else {
      toast.error("Failed to Payment This Order");
    }
  } catch (error) {
    console.error(error);
  }
};
