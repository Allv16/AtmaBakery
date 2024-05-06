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

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API}/products/delete/${id}`,
      {
        headers: {
          Authorization:
            "Bearer lEOn1TgDZAFIpRQ30ENTl4C8POy87hRCqKfWb8tq7db966c7",
        },
      }
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
