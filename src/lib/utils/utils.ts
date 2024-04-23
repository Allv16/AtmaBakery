import axios from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5|tAMus8YJksr0l2mr65H9Jej5JKn56LUUO4icrk1j4bf1651d",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
