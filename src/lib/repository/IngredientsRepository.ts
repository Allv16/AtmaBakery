import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IIngredients } from "../interfaces/IIngredients";
import axios from "axios";

export const getAllIngredients = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/ingredients`,
    fetcher
  );
  console;

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.ingredients as IIngredients[],
    error,
    isLoading,
    isValidating,
  };
};

export const addIngredients = async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/ingredients/add`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer L6f15OCM8ZzAf3PJlBAHSchamc57i1voeD2fI3Y3deb152f6",
        },
      }
    );

    if (response.status === 201) {
      toast.success("Successfully Added Ingredients");
    } else {
      toast.error("Failed to Add Ingredients");
    }
  } catch (error) {
    console.error(error);
  }
};
