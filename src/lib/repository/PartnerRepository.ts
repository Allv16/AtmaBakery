import useSWR, { mutate } from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IPartner } from "../interfaces/IPartner";
import axios from "axios";

export const getAllPartner = () => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
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
    mutate,
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
            "Bearer lEOn1TgDZAFIpRQ30ENTl4C8POy87hRCqKfWb8tq7db966c7",
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

export const getPartnerById = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/penitip/${id}`,
    fetcher
  );

  console.log(data);

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
    console.log(error);
  }

  return {
    data: data?.custodian as IPartner,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export const editPartner = async (data: any, id: String) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/penitip/edit/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer lEOn1TgDZAFIpRQ30ENTl4C8POy87hRCqKfWb8tq7db966c7",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Edited Partner");
      mutate(`${import.meta.env.VITE_BASE_API}/penitip`);
    } else {
      toast.error("Failed to Edit Partner");
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
            "Bearer lEOn1TgDZAFIpRQ30ENTl4C8POy87hRCqKfWb8tq7db966c7",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Deleted Partner");
      mutate(`${import.meta.env.VITE_BASE_API}/penitip`);
    } else {
      toast.error("Failed to Delete Partner");
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the partner");
  }
};
