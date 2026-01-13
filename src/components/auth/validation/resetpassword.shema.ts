import * as Yup from "yup";

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password should have more than 7 simbols length")
    .required("Required"),
});
