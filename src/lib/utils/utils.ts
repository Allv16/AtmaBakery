import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 1|rViSAFZUmY48LlvztACkw6ua2fJr3Rgi4aPQxA2u9344200e",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
