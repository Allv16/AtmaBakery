import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Iwv6rhhT230HRKqWp1Ah1Mo1MoKoF2G8PHjTnKSM5b4d7678",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
