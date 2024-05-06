/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-const */
import useSWR, { mutate } from "swr";
import { axiosInstance, fetcher } from "../utils/utils";
import { toast } from "sonner";
import { IHampers } from "../interfaces/IHampers";

export const getAllHampers = () => {
  let { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_BASE_API}/hampers`,
    fetcher
  );

  if (!isLoading && error) {
    toast.error("Gagal mengambil data");
  }

  return {
    data: data?.hampers as IHampers[],
    error,
    isLoading,
    isValidating,
  };
};

export const addHampers = async (data: any) => {
  try {
    const response = await axiosInstance().post(
      `${import.meta.env.VITE_BASE_API}/hampers/add`,
      data
    );
    if (response.status.toString().startsWith("20")) {
      toast.success("Successfully Added Hampers");
      mutate(`${import.meta.env.VITE_BASE_API}/hampers`);
    } else {
      toast.error("Failed to Add Products");
    }
  } catch (error) {
    console.error(error);
  }
};
