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
            "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
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

export const getProductsById = (id: string) => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products/${id}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.product as IProduct,
    error,
    isLoading,
    isValidating,
  };
};
