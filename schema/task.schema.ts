import * as yup from "yup";

export const taskSchema = yup.object({
  title: yup.string().required("please enter the task"),
});

export const taskUpdateSchema = yup.object({
  title: yup.string().optional(),
});
