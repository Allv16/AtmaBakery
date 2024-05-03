import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer uA9DY4RBb5IUrR8sF4ZIG3DyjbNjDP6MF4z9FbNYe40a13b5",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
