import axios from "axios";
import Cookies from "js-cookie";

const URI = process.env.NEXT_PUBLIC_API;
const TOKEN = Cookies.get("access_token");

const apiInstance = axios.create({
  baseURL: URI,
});

apiInstance.interceptors.request.use(
  function (config) {
    // @ts-ignore
    config.headers.authorization = `BEARER ${TOKEN}`;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default apiInstance;
