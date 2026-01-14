import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import DatesInputs from "./DatesInputs";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectDates } from "@/redux/filters/selectors";
import { setDates } from "@/redux/filters/filtersSlice";

import css from "./SearchBar.module.css";

export interface SearchBarFormValues {
  pickup: string;
  dropoff: string;
}

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { startDate, endDate } = useAppSelector(selectDates);

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

      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    }
  };

  const initialValues: SearchBarFormValues = {
    pickup: startDate || "",
    dropoff: endDate || "",
  };

  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        <Form className={css.form}>
          <DatesInputs />
          <button type="submit" className={css.button}>
            <svg className={css.icon} width={20} height={20}>
              <use href="/sprite.svg#icon-search"></use>
            </svg>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
