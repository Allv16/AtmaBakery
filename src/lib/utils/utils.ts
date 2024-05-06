import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 45|cjoNmEBCkM04S4EOFw1dFp8g3pEDZVKg4ectYghfb928477d",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
