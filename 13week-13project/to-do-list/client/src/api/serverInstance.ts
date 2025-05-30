import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const URL = process.env.NEXT_PUBLIC_SERVER_URL ?? "";

console.log("api", URL);
export const apiInstance = axios.create({
  baseURL: URL,
});
