import { ITask } from "@/interface/task.interface";
import apiInstance from "./apiInstance";

export const addTask = async (data: ITask) => {
  try {
    const response = await apiInstance.post("/api/todo", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTask = async () => {
  try {
    const response = await apiInstance.get("/api/todo");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const delTask = async (id: string) => {
  try {
    const response = await apiInstance.delete(`/api/todo/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
