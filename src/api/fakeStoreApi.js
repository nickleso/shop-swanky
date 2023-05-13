import axios from "axios";

axios.defaults.baseURL = `https://fakestoreapi.com`;

export const getAllProducts = async () => {
  const url = `/products`;
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.log(error);
  }
};
