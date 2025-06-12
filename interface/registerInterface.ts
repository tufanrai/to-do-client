import * as yup from "yup";

export const IRegister = yup.object({
  full_name: yup.string().required("please enter your full name"),
  email: yup
    .string()
    .required("please enter your email")
    .email("please enter a valid email"),
  password: yup
    .string()
    .required("please enter your password")
    .min(6, "your password must have at least 6 characters"),
  c_password: yup
    .string()
    .required("please re enter your password")
    .oneOf(
      [yup.ref("password")],
      "password did not matched please re enter the password"
    ),
});
