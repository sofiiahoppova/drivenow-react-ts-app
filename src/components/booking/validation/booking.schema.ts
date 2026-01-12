import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  plan: Yup.string().oneOf(["Basic plan", "Full coverage"]).required(),
  paymentMethod: Yup.string().oneOf(["online", "offline"]).required("Required"),

  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
    .required("Required"),

  dateOfBirth: Yup.string()
    .matches(
      /^\d{4}\-\d{2}\-\d{2}$/,
      "Date of birth must be in format YYYY.MM.DD"
    )
    .required("Required"),

  fullName: Yup.string().min(3).required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  passport: Yup.string().min(4, "Serial number too short"),
  passportPhoto: Yup.mixed(),

  license: Yup.string().min(4, "Serial number too short"),
  licensePhoto: Yup.mixed(),
});
