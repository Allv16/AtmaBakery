import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer L6f15OCM8ZzAf3PJlBAHSchamc57i1voeD2fI3Y3deb152f6",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
