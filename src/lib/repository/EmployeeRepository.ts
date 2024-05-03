import useSWR from "swr";
import { fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IEmployee } from "../interfaces/IEmployee";
import axios from "axios";

export const getAllEmployee = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/karyawan`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.karyawan as IEmployee[],
    error,
    isLoading,
    isValidating,
  };
};

export const getKaryawanById = (id: string) => {
  let { data, error, isLoading, isValidating, mutate } = useSWR(
    `${import.meta.env.VITE_BASE_API}/karyawan/${id}`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.karyawan as IEmployee,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};

export const addEmployee = async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/karyawan/add`,
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
      toast.success("Successfully Added Employee");
    } else {
      toast.error("Failed to Add Employee");
    }
  } catch (error) {
    console.error(error);
  }
};

export const editEmployee = async (data: any, id: String) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/karyawan/edit/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer uA9DY4RBb5IUrR8sF4ZIG3DyjbNjDP6MF4z9FbNYe40a13b5",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Edited Employee");
      mutate(`${import.meta.env.VITE_BASE_API}/employee`);
    } else {
      toast.error("Failed to Edit Employee");
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteEmployee = async (id: string) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API}/karyawan/delete/${id}`,
      {
        headers: {
          Authorization:
            "Bearer uA9DY4RBb5IUrR8sF4ZIG3DyjbNjDP6MF4z9FbNYe40a13b5",
        },
      }
    );

    if (response.status === 200) {
      toast.success("Successfully Deleted Employee");
    } else {
      toast.error("Failed to Delete Employee");
    }
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while deleting the employee");
  }
};
