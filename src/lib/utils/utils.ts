import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const axiosInstance = () => {
  const token = `${import.meta.env.VITE_API_TOKEN}`;

  const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosClient;
};
