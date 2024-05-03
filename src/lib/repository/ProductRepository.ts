/* eslint-disable prefer-const */
import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IProduct } from "../interfaces/IProducts";

export const getAllProcuts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products/random`,
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
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer uA9DY4RBb5IUrR8sF4ZIG3DyjbNjDP6MF4z9FbNYe40a13b5",
        },
      }
    );

    if (response.status === 201) {
      toast.success("Successfully Added Products");
    } else {
      toast.error("Failed to Add Products");
    }
  } catch (error) {
    console.error(error);
  }
};
