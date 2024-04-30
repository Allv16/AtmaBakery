import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 1|52K9cORaUFVpQhGyf72lIEUVDPCpatsdMl6UAtSN84610c44",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
