import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password should have more than 7 simbols length")
    .required("Required"),
});
