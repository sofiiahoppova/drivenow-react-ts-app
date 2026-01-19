import * as Yup from "yup";

export const updateUserSchema = Yup.object().shape({
  fullName: Yup.string().min(3).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(
    /^\+?\d{10,15}$/,
    "Enter a valid phone number"
  ),
  dateOfBirth: Yup.string().matches(
    /^\d{4}\-\d{2}\-\d{2}$/,
    "Date of birth must be in format YYYY-MM-DD"
  ),
});
