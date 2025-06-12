import { ILogin } from "@/schema/log.schema";
import apiInstance from "./apiInstance";
import { IUser } from "@/schema/register.schema";

// login
export const login = async (data: ILogin) => {
  try {
    const response = await apiInstance.post("/api/user/login", data);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

// signup
export const Signup = async (data: IUser) => {
  try {
    const response = await apiInstance.post("/api/user/register", data);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
