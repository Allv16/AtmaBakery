/* eslint-disable prefer-const */
import useSWR, { mutate } from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IProduct } from "../interfaces/IProducts";
import axios from "axios";

export const getAllProcuts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.products as IProduct[],
    error,
    isLoading,
    isValidating,
  };
};

export const addProducts = async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/products/add`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer cjoNmEBCkM04S4EOFw1dFp8g3pEDZVKg4ectYghfb928477d",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Added Products");
      mutate(`${import.meta.env.VITE_BASE_API}/products`);
    } else {
      toast.error("Failed to Add Products");
    }
  } catch (error) {
    console.error(error);
  }
};
