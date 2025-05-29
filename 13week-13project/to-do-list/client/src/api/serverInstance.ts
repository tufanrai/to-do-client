import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const url = process.env.SERVER_URL;

export const apiInstance = axios.create({
  headers: {
    Authorization: `BEARER ${token}`,
  },
  baseURL: `${url}`,
});
