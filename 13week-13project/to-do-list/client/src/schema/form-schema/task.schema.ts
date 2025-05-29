import * as yup from "yup";

// task schema
export const taskSchema = yup
  .object({
    title: yup
      .string()
      .required("please enter the title of your taks for today"),
    disc: yup.string().required(),
  })
  .required();

// login schema
export const logSchema = yup.object({
  email: yup
    .string()
    .required("please enter your email")
    .email("please enter a valid email"),
  password: yup.string().required("please enter your passwrod"),
});

// signup schema
export const signupSchema = yup
  .object({
    name: yup.string().required("please enter your full name"),
    email: yup
      .string()
      .required("please enter your email")
      .email("please enter valid email"),
    password: yup
      .string()
      .required("please enter your password")
      .min(6, "your password must be of at least 6 characters"),
    c_password: yup
      .string()
      .required("please re-enter your password")
      .oneOf([yup.ref("password")], "password did not matched"),
  })
  .required();
