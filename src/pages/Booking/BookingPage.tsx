import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import { User } from "@/types";

import BookingCard from "@/components/booking/BookingCard/BookingCard";
import BookingForm from "@/components/booking/BookingForm/BookingForm";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectDates } from "@/redux/filters/selectors";
import { selectMe } from "@/redux/user/selectors";
import { createBooking } from "@/redux/bookings/operations";
import { bookingSchema } from "@/components/booking/validation/booking.schema";

import css from "./BookingPage.module.css";

interface FormValues extends User {
  plan: "Basic plan" | "Full coverage";
  paymentMethod: string;
  passportPhoto: string;
  licensePhoto: string;
}

const BookingPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectMe);

  const initialValues: FormValues = {
    plan: "Basic plan",
    paymentMethod: "",

    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    dateOfBirth: user?.dateOfBirth ? user?.dateOfBirth.split("T")[0] : "",

    passportSerial: user?.passportSerial || "",
    passportPhoto: "",

    driverLicenseSerial: user?.driverLicenseSerial || "",
    licensePhoto: "",
  };

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const dates = useAppSelector(selectDates);
  const startDate = dates.startDate ?? localStorage.getItem("startDate");
  const endDate = dates.endDate ?? localStorage.getItem("endDate");

  const handleSubmit = async (values: FormValues) => {
    try {
      if (startDate && endDate) {
        await dispatch(
          createBooking({
            plan: plan === "basic" ? "basicPlan" : "fullCoverage",
            carId: Number(id),
            startDate,
            endDate,
            user: {
              fullName: values.fullName,
              phoneNumber: values.phoneNumber,
              dateOfBirth: values.dateOfBirth,
              email: values.email,
              passportSerial: values.passportSerial || null,
              driverLicenseSerial: values.driverLicenseSerial || null,
            },
          })
        ).unwrap();
        toast.success("You have booked the car successfully!");
        navigate("/account");
      } else toast.error("Dates not chosen");
    } catch (e: unknown) {
      if (typeof e === "string") toast.error(e);
      else toast.error("Something went wrong");
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Booking Details & Verification</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.wrapper}>
          <BookingForm />
          <BookingCard />
        </Form>
      </Formik>
    </div>
  );
};

export default BookingPage;
