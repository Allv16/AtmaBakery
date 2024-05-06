import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IRecipe } from "../interfaces/IRecipe";
import { IProduct } from "../interfaces/IProducts";
import axios from "axios";

export const getOwnProducts = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/products/own-products`,
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

export const addRecipes = async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/recipes/add`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
        },
      }
    );

    if (response.status === 201) {
      toast.success("Successfully Added Recipes");
    } else {
      toast.error("Failed to Add Recipes");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getRecipesById = (id: string) => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/recipes/${id}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data,
    error,
    isLoading,
    isValidating,
  };
};

export const editRecipes = async (id: string, data: any) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/recipes/edit/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Edited Recipes");
    } else {
      toast.error("Failed to Edit Recipes");
    }
  } catch (error) {
    console.error(error);
  }
};
