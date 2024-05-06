import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer lEOn1TgDZAFIpRQ30ENTl4C8POy87hRCqKfWb8tq7db966c7",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
