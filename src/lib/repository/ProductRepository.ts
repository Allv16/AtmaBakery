/* eslint-disable prefer-const */
import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
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
    const response = await axiosInstance().post(
      `${import.meta.env.VITE_BASE_API}/products/add`,
      data
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

export const deleteProduct = async (id: string) => {
  try {
    const response = await axiosInstance().delete(
      `${import.meta.env.VITE_BASE_API}/products/delete/${id}`
    );

    if (response.status === 200) {
      toast.success("Successfully Deleted Product");
      mutate(`${import.meta.env.VITE_BASE_API}/products`);
    } else {
      toast.error("Failed to Delete Partner");
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the product");
  }
};
