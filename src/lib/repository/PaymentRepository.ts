import axios from "axios";
import { toast } from "sonner";
import { mutate } from "swr";

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

export const confirmTransaction = async (data: any, id: string) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/pembayaran/konfirm/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Confirm Payment This Order");
    } else {
      toast.error("Failed to Payment This Order");
    }
  } catch (error) {
    toast.error("Error", (error as any).response.data);
  }
};
