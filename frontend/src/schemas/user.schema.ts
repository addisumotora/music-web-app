import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().min(4).required("name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});
