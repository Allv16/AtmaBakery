import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 7rG7cwbMXFfDfEvs1P8EcV3USHtuRhC9viEkw5ms1c029a8a",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
