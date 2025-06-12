import * as yup from "yup";

export const ILog = yup.object({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: yup.string().required("please enter the password"),
});
