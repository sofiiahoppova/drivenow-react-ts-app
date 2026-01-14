import { Field, Form, Formik } from "formik";
import clsx from "clsx";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectFilters } from "@/redux/filters/selectors";
import { resetFilters, setFilter } from "@/redux/filters/filtersSlice";

import css from "./FiltersBar.module.css";

interface FormValues {
  transmission: boolean;
  class: string;
  brand: string;
  seats: string;
}

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  const handleSubmit = (values: FormValues) => {
    dispatch(
      setFilter({
        brand: values.brand || null,
        seats: values.seats || null,
        transmission: values.transmission ? "automatic" : null,
        carClass: values.class || null,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const initialValues: FormValues = {
    transmission: false,
    class: "",
    brand: filters.brand || "",
    seats: "",
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <Form className={css.filtersForm}>
          <div className={css.mainWrapper}>
            <label className={clsx(css.checkboxWrapper, css.checkbox)}>
              <Field type="checkbox" name="transmission" id="transmission" />
              <span className={css.checkmark}></span>
              <span className={css.label}>Only Automatic</span>
            </label>
            <div className={css.selectWrapper}>
              <Field as="select" name="class" id="class" className={css.select}>
                <option value="">Class</option>
                <option value="economy">economy</option>
                <option value="compact">compact</option>
                <option value="midsize">midsize</option>
                <option value="SUV">SUV</option>
                <option value="premium">premium</option>
              </Field>
            </div>
            <div className={css.selectWrapper}>
              <Field as="select" name="brand" id="brand" className={css.select}>
                <option value="">Brand</option>
                <option value="Fiat">Fiat</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Lexus">Lexus</option>
                <option value="Lamborghini">Lamborghini</option>
              </Field>
            </div>
            <div className={css.selectWrapper}>
              <Field as="select" name="seats" id="seats" className={css.select}>
                <option value="">Seats</option>
                <option value="2">2 seats</option>
                <option value="4">4 seats</option>
                <option value="5">5 seats</option>
                <option value="7">7 seats</option>
                <option value="8">8 seats</option>
              </Field>
            </div>
          </div>
          <div className={css.buttonsWrapper}>
            <button type="reset" className={clsx(css.btn, css.resetBtn)}>
              ResetAll
            </button>
            <button type="submit" className={clsx(css.btn, css.submitBtn)}>
              Filter
              <svg className={css.icon} width={24} height={24}>
                <use href="/sprite.svg#icon-filter"></use>
              </svg>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FiltersBar;
