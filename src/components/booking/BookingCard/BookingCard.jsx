import React, { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import clsx from "clsx";

import Loader from "../../shared/Loader/Loader";

import { selectDates } from "/src/redux/filters/selectors";
import { calculateDays } from "/src/utils/calculateDays";
import { calculatePrice } from "/src/utils/calculatePrice";
import { fetchCarById } from "/src/redux/cars/operations";
import {
  selectCar,
  selectCarsError,
  selectCarsStatus,
} from "/src/redux/cars/selectors";

import css from "./BookingCard.module.css";

const BookingCard = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const dates = useSelector(selectDates);
  const startDate = dates.startDate ?? localStorage.getItem("startDate");
  const endDate = dates.endDate ?? localStorage.getItem("endDate");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const car = useSelector(selectCar);

  const days = calculateDays(startDate, endDate);

  const price = useMemo(() => {
    if (!car) return null;
    if (days <= 0) return null;

    return calculatePrice(car, days, plan);
  }, [car, days, plan]);

  const carsStatus = useSelector(selectCarsStatus);
  const error = useSelector(selectCarsError);

  useEffect(() => {
    if (carsStatus === "failed") {
      toast.error(error);
    }
  }, [carsStatus, error]);

  if (carsStatus === "loading") return <Loader />;
  if (!car) return <p>Car not found</p>;
  if (!price) return <Loader />;

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.lightTitle}>{car.model}</span>
          </h3>
          <div className={css.classWrapper}>
            <p className={css.carClass}>{car.carClass}</p>
          </div>
        </div>
        <img
          src="/images/CarExample.png"
          alt={`${car.brand} ${car.model} photo`}
          className={css.image}
        />
      </div>
      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.text}>
          {car.brand} {car.model}{" "}
          <span className={css.bold}>{price.dailyRate} $</span> x{" "}
          <span className={css.bold}>{days} days</span>
        </p>
        <p className={css.bold}>{price.base} $</p>
      </div>
      <span className={css.divider} />

      <div className={css.priceWrapper}>
        <p className={css.text}>
          {plan == "full" ? "Full covarage" : "Basic plan"}
        </p>
        <span className={css.bold}>{price.coveragePrice} $</span>
      </div>
      <div className={css.priceWrapper}>
        <p className={css.text}>Deposit</p>
        <span
          className={clsx(
            css.bold,
            plan === "full" ? css.accentGreen : css.accentRed
          )}
        >
          {price.deposit} $
        </span>
      </div>

      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.total}>Total</p>
        <span className={css.total}>{price.total} $</span>
      </div>
      <button className={css.bookBtn} type="submit">
        Confirm booking
      </button>
      <div className={css.inputWrapper}>
        <p className={css.text}>
          By confirming your booking, you agree to our Terms of Use, Rental
          Agreement, and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
