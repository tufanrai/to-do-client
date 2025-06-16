import { ITask, IUpdateTask } from "@/interface/task.interface";
import apiInstance from "./apiInstance";

// create task
export const addTask = async (data: ITask) => {
  try {
    const response = await apiInstance.post("/api/todo", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

// get task
export const getTask = async () => {
  try {
    const response = await apiInstance.get("/api/todo");
    return response.data;
  } catch (error) {
    return error;
  }
};

// remove task
export const delTask = async (id: string) => {
  try {
    const response = await apiInstance.delete(`/api/todo/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

// update task
export const updTask = async (data: IUpdateTask) => {
  const id = localStorage.getItem("upd_id");
  try {
    const response = await apiInstance.put(`/api/todo/update/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

// get task by id
export const getById = async () => {
  const id = localStorage.getItem("upd_id");
  try {
    const response = await apiInstance.get(`/api/todo/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
