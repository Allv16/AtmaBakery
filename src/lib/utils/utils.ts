import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer tthm2HXmOqYTvtqtVkLI0rPdFj11uAepluocVI7Ba8d02f8f",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
