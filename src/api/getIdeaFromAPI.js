import axios from "axios";

export async function getAnIdea() {
  const axiosNewsResponse = await axios.get("", {
    params: {},
  });
  return axiosNewsResponse.data;
}
