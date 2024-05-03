import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPartner } from "../interfaces/IPartner";
import axios from "axios";

export const getAllPartner = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/penitip`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.penitip as IPartner[],
    error,
    isLoading,
    isValidating,
  };
};

export const addPartner = async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/penitip/add`,
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
      toast.success("Successfully Added Partner");
    } else {
      toast.error("Failed to Add Partner");
    }
  } catch (error) {
    console.error(error);
  }
};

export const deletePartner = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API}/penitip/delete/${id}`,
      {
        headers: {
          Authorization:
            "Bearer uA9DY4RBb5IUrR8sF4ZIG3DyjbNjDP6MF4z9FbNYe40a13b5",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Deleted Partner");
    } else {
      toast.error("Failed to Delete Partner");
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the partner");
  }
};
