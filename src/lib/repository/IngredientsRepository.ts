import useSWR, { mutate } from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IIngredients } from "../interfaces/IIngredients";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const getAllIngredients = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/ingredients`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.ingredients as IIngredients[],
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export const getIngredientsById = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/ingredients/${id}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.ingredient as IIngredients,
    error,
    isLoading,
    isValidating,
    mutate,
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
            "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Added Ingredients");
      mutate(`${import.meta.env.VITE_BASE_API}/ingredients`);
    } else {
      toast.error("Failed to Add Ingredients");
    }
  } catch (error) {
    console.error(error);
  }
};

export const editIngredients = async (data: any, id: String) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/ingredients/edit/${id}`,
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
      toast.success("Successfully Edited Ingredients");
      mutate(`${import.meta.env.VITE_BASE_API}/ingredients`);
    } else {
      toast.error("Failed to Edit Ingredients");
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteIngredient = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API}/ingredients/delete/${id}`,
      {
        headers: {
          Authorization:
            "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Deleted Ingredient");
      mutate(`${import.meta.env.VITE_BASE_API}/ingredients`);
    } else {
      toast.error("Failed to Delete Ingredient");
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the ingredient");
  }
};
