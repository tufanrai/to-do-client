import { Ilog, ISignup, Itask } from "../interface/index.inteface";
import { apiInstance } from "./serverInstance";

export const createTask = async (data: Itask) => {
  try {
    const response = apiInstance.post("/api/task", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createAcc = async (data: ISignup) => {
  try {
    const response = apiInstance.post("/api/auth/signup", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const log = async (data: Ilog) => {
  try {
    const response = apiInstance.post("/api/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
