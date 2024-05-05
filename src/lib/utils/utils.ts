import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 56gkoUiiQETT8cT7Licj6BFkpihtto6KlUI38pkF57a5f12f",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
