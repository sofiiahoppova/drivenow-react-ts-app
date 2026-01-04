import * as Yup from "yup";

export const logInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password should have more than 7 simbols length")
    .required("Required"),
});
