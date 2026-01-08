import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import DatesInputs from "./DatesInputs";

import { selectDates } from "@/redux/filters/selectors";
import { setDates } from "@/redux/filters/filtersSlice";
import { setClose } from "@/redux/modal/modalSlice";

import { SearchBarFormValues } from "./SearchBar";

import css from "./SearchBarModal.module.css";

interface Props {
  carId: string;
}

const SearchBarModal = ({ carId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(selectDates);

  const handleSearch = (values: SearchBarFormValues) => {
    const pickupDate = values.pickup;
    const dropoffDate = values.dropoff;
    const dateNow = Date.now();
    const today = new Date(dateNow);

    if (pickupDate >= dropoffDate) {
      toast.error("Pick up date should be earlier than drop off date.");
    } else if (pickupDate < today.toISOString().split("T")[0]) {
      toast.error("Pick up date shouldn't be earliar than today");
    } else {
      dispatch(setDates([pickupDate, dropoffDate]));
      localStorage.setItem("startDate", pickupDate);
      localStorage.setItem("endDate", dropoffDate);

      toast.success("Dates selected successfully!");
      dispatch(setClose());
      navigate(`/booking/${carId}?plan=basic`);
    }
  };

  const initialValues: SearchBarFormValues = {
    pickup: startDate || "",
    dropoff: endDate || "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSearch}>
      <Form className={css.form}>
        <DatesInputs />
        <div className={css.btnWrapper}>
          <button className={css.button} type="submit">
            Book Now
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBarModal;
